<script lang="ts">
	import type { GlyphInput, Rule, Syntax } from '$lib/types';
	import { glyphs, selectedGlyph, syntaxes } from '$lib/stores';
	import { nanoid } from 'nanoid';
	import _ from 'lodash';

	import InputText from '$lib/ui/inputText.svelte';
	import Sidebar from '$lib/ui/sidebar.svelte';
	import SidebarTile from '$lib/ui/sidebarTile.svelte';
	import Button from '$lib/ui/button.svelte';
	import GlyphPreview from '$lib/partials/glyphPreview.svelte';

	import { createEmptySyntax, createEmptyRule } from '$lib/types';
	import DeleteButton from '$lib/ui/deleteButton.svelte';

	//

	if (!$glyphs.length) {
		addGlyph();
	}

	function addGlyph() {
		const newGlyph: GlyphInput = {
			id: nanoid(5),
			name: '[aggiungi nome]',
			structure: ''
		};
		$glyphs = [...$glyphs, newGlyph];
		$selectedGlyph = newGlyph.id;
	}

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
</script>

<!--  -->

<div class="flex flex-row flex-nowrap items-stretch overflow-hidden grow">
	<div class="shrink-0 flex items-stretch">
		<Sidebar>
			<svelte:fragment slot="topArea">
				<Button on:click={addGlyph}>+ Aggiungi glifo</Button>
			</svelte:fragment>
			<svelte:fragment slot="listTitle">Lista glifi</svelte:fragment>
			<svelte:fragment slot="items">
				{#each $glyphs as g (g.id)}
					<SidebarTile selection={selectedGlyph} id={g.id}>
						{g.name}
					</SidebarTile>
				{/each}
			</svelte:fragment>
		</Sidebar>
	</div>

	<!-- Glyph area -->
	<div class="p-8 space-y-8 grow flex flex-col items-stretch">
		{#each $glyphs as g}
			{#if g.id == $selectedGlyph}
				<div class="shrink-0 flex justify-between items-end">
					<div>
						<p class="text-small font-mono text-slate-900 mb-2 text-sm">
							Nome glifo
						</p>
						<InputText bind:value={g.name} />
					</div>
					<DeleteButton on:delete={handleDelete} />
				</div>
				<hr />
				<div class="grow flex flex-col items-stretch">
					<p class="text-small font-mono text-slate-900 mb-2 text-sm">
						Struttura glifo
					</p>
					<textarea
						class="h-0 grow p-2 bg-slate-200 tracking-[0.75em] hover:bg-slate-300 font-mono focus:ring-4"
						bind:value={g.structure}
					/>
				</div>
			{/if}
		{/each}
	</div>

	<div class="p-8 border border-l-gray-300 overflow-y-scroll">
		<GlyphPreview />
	</div>
</div>
