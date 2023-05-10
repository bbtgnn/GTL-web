<script lang="ts" context="module">
	import { writable } from 'svelte/store';
	export const currentSyntaxId = writable<string>('');
</script>

<script lang="ts">
	import {
		createEmptySyntax,
		createEmptyRule,
		type GlyphInput
	} from '$lib/types';
	import type { Syntax, Rule } from '$lib/types';
	import { syntaxes, glyphs } from '$lib/stores';
	import { nanoid } from 'nanoid';
	import _ from 'lodash';

	import SyntaxEditor from '$lib/components/syntax/syntaxEditor.svelte';
	import InputText from '$lib/ui/inputText.svelte';
	import Sidebar from '$lib/ui/sidebar.svelte';
	import SidebarTile from '$lib/ui/sidebarTile.svelte';
	import Button from '$lib/ui/button.svelte';
	import SyntaxPreview from '$lib/partials/syntaxPreview.svelte';
	import DeleteButton from '$lib/ui/deleteButton.svelte';

	//

	/**
	 * Updating all the syntaxes if there are new symbols
	 */

	for (let syntax of $syntaxes) {
		// Getting all symbols in syntax
		const syntaxSymbols = syntax.rules.map((r) => r.symbol);
		// Checking for additions
		for (let symbol of getUniqueSymbols($glyphs)) {
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

	function getRuleBySymbol(syntax: Syntax, s: string): Rule {
		for (let rule of syntax.rules) {
			if (rule.symbol == s) {
				return rule;
			}
		}
		throw new Error('missingSymbol');
	}

	/**
	 * Adding syntaxes
	 */

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

	function addSyntax(name: string | null = null) {
		const newSyntax = createEmptySyntax(
			name ? name : nanoid(5),
			nanoid(5),
			getUniqueSymbols($glyphs)
		);

		$syntaxes = [...$syntaxes, newSyntax];
		$currentSyntaxId = newSyntax.id;
	}

	// Shorthand function for the button
	function addSyntaxBtn() {
		addSyntax();
	}

	let currentSyntax: Syntax | undefined;
	$: currentSyntax = $syntaxes.find((s) => s.id == $currentSyntaxId);

	let currentSyntaxIndex: number | undefined;
	$: if (currentSyntax) currentSyntaxIndex = $syntaxes.indexOf(currentSyntax);

	function handleDelete() {
		$syntaxes = $syntaxes.filter((s) => s.id != $currentSyntaxId);
		if ($syntaxes[0]) $currentSyntaxId = $syntaxes[0].id;
	}
</script>

<!--  -->

<div class="h-full flex flex-row flex-nowrap items-stretch">
	<!-- sidebar -->
	<Sidebar>
		<svelte:fragment slot="topArea">
			<Button on:click={addSyntaxBtn}>+ Aggiungi stile</Button>
		</svelte:fragment>
		<svelte:fragment slot="listTitle">Lista stili</svelte:fragment>
		<svelte:fragment slot="items">
			{#each $syntaxes as s (s.id)}
				<SidebarTile selection={currentSyntaxId} id={s.id}>
					{s.name}
				</SidebarTile>
			{/each}
		</svelte:fragment>
	</Sidebar>

	<!-- syntax editor -->
	<div class="p-8 space-y-8 overflow-y-auto">
		{#if currentSyntax && currentSyntaxIndex !== undefined}
			<div class="">
				<div class="flex flex-col mb-8">
					<p class="text-small font-mono text-slate-900 mb-2 text-sm">
						Nome stile
					</p>
					<InputText name="styleName" bind:value={currentSyntax.name} />
				</div>
				<DeleteButton on:delete={handleDelete} />
			</div>
			<hr />
			<SyntaxEditor bind:syntax={$syntaxes[currentSyntaxIndex]} />
		{/if}
	</div>

	<div class="p-8 border border-l-gray-300 overflow-y-scroll">
		{#if currentSyntax}
			<SyntaxPreview syntax={currentSyntax} />
		{/if}
	</div>
</div>
