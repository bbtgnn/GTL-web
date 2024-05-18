<script lang="ts">
	import type { GlyphInput, Rule, Syntax } from '$lib/types';
	import { glyphs, selectedGlyph, syntaxes } from '$lib/stores';
	import _ from 'lodash';

	import Sidebar from '$lib/ui/sidebar.svelte';
	import SidebarButton from '$lib/ui/sidebarButton.svelte';
	import GlyphPreview from '$lib/partials/glyphPreview.svelte';

	import { createEmptyRule } from '$lib/types';
	import DeleteButton from '$lib/ui/deleteButton.svelte';
	import AddGlyphModal from './AddGlyphModal.svelte';
	import { UNICODE, getUnicodeNumber, glyphStringFromName } from '$lib/GTL/unicode';
	import ScrollArea from '$lib/components/ui/scroll-area/scroll-area.svelte';
	import Separator from '$lib/components/ui/separator/separator.svelte';
	import { Button } from '$lib/components/ui/button';
	import Icon from '$lib/ui/icon.svelte';
	import Plus from 'lucide-svelte/icons/plus';

	import { createToggleStore } from '$lib/ui/utils';
	import GlyphEditor from '$lib/partials/glyphEditor.svelte';

	//

	function getUniqueSymbols(glyphs: Array<GlyphInput>): Array<string> {
		const symbols = [];
		for (const g of glyphs) {
			const txt = g.structure.replace(/(\r\n|\n|\r)/gm, '');
			if (txt) {
				symbols.push(...txt.split(''));
			}
		}

		// Unique symbols
		return _.uniq(symbols);
	}

	function getRuleBySymbol(syntax: Syntax, s: string): Rule {
		for (let rule of syntax.rules) {
			if (rule.symbol == s) {
				return rule;
			}
		}
		throw new Error('missingSymbol');
	}

	function updateSyntaxSymbols(syntax: Syntax, symbols: Array<string>) {
		// Getting all symbols in syntax
		const syntaxSymbols = syntax.rules.map((r) => r.symbol);
		// Checking for additions
		for (let symbol of symbols) {
			if (!syntaxSymbols.includes(symbol)) {
				syntax.rules.push(createEmptyRule(symbol));
			}
		}
		// Removing if a symbol goes away
		for (let symbol of syntaxSymbols) {
			if (!getUniqueSymbols($glyphs).includes(symbol)) {
				const extraRule = getRuleBySymbol(syntax, symbol);
				const index = syntax.rules.indexOf(extraRule);
				syntax.rules.splice(index, 1);
			}
		}
	}

	$: {
		const uniqueSymbols = getUniqueSymbols($glyphs);
		for (let syntax of $syntaxes) {
			updateSyntaxSymbols(syntax, uniqueSymbols);
		}
	}

	function handleDelete() {
		$glyphs = $glyphs.filter((g) => g.id != $selectedGlyph);
		$selectedGlyph = $glyphs[0].id;
	}

	function sortGlyphs(glyphs: GlyphInput[]): GlyphInput[] {
		return glyphs.sort((a, b) => {
			const aUnicode = getUnicodeNumber(a.name);
			const bUnicode = getUnicodeNumber(b.name);
			return aUnicode - bUnicode;
		});
	}

	//

	let addGlyphModal = createToggleStore(false);
</script>

<!--  -->

<Sidebar>
	<p class="title-sm">Lista glifi</p>

	<Button variant="default" class="shrink-0" on:click={addGlyphModal.on}>
		<Icon src={Plus} mr /> Aggiungi glifo
	</Button>

	<Separator />

	<ScrollArea>
		<div class="space-y-1">
			{#each sortGlyphs($glyphs) as g}
				{@const glyphString = glyphStringFromName(g.name)}
				<SidebarButton selection={selectedGlyph} value={g.id}>
					<p>
						{#if glyphString}
							<span class="">
								{glyphString}
							</span>
						{/if}
						{#if g.name != glyphString}
							{#if glyphString}
								<span class="my-3 opacity-15">–</span>
							{/if}
							<span class="opacity-15">
								{g.name}
							</span>
						{/if}
					</p>
				</SidebarButton>
			{/each}
		</div>
	</ScrollArea>
</Sidebar>

<!-- Glyph area -->
<div class="flex w-0 grow flex-col items-stretch space-y-6 p-8 pt-4">
	{#each $glyphs as g}
		{#if g.id == $selectedGlyph}
			{@const glyphString = glyphStringFromName(g.name)}
			{@const glyphName = UNICODE[g.name]}

			<div class="flex shrink-0 items-center justify-between">
				<div class="flex gap-4">
					{#if glyphString}
						<div
							class="flex h-12 w-12 items-center justify-center rounded-md bg-slate-50 font-mono text-xl"
						>
							<p>{glyphString}</p>
						</div>
					{/if}
					<div class="text-md text-slate-400">
						<p>{g.name}</p>
						{#if glyphName}
							<p class="font-mono">
								{glyphName}
							</p>
						{/if}
					</div>
				</div>

				<DeleteButton on:delete={handleDelete}>
					<svelte:fragment slot="title">
						Elimina il glifo {glyphString} ({glyphName})
					</svelte:fragment>
					<svelte:fragment slot="description">
						Sei sicuro? L'azione non è reversibile
					</svelte:fragment>
				</DeleteButton>
			</div>
			<div class="flex grow flex-col items-stretch">
				<GlyphEditor bind:glyph={g.structure}></GlyphEditor>
			</div>
		{/if}
	{/each}
</div>

<GlyphPreview />

<AddGlyphModal bind:open={$addGlyphModal} />
