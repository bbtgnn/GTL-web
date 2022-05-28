<script lang="ts">
	import { writable } from 'svelte/store';

	import { createEmptySyntax, createEmptyRule } from '$lib/types';
	import type { Syntax, Rule } from '$lib/types';
	import { syntaxes, glyphs, selectedStyle } from '$lib/stores';
	import { nanoid } from 'nanoid';
	import _ from 'lodash';

	import SyntaxEditor from '$lib/components/syntax/syntaxEditor.svelte';
	import InputText from '$lib/ui/inputText.svelte';
	import Label from '$lib/ui/label.svelte';
	import Sidebar from '$lib/ui/sidebar.svelte';
	import SidebarTile from '$lib/ui/sidebarTile.svelte';
	import Button from '$lib/ui/button.svelte';

	/**
	 * Getting unique symbols
	 */

	function getUniqueSymbols(): Array<string> {
		const symbols = [];
		for (const g of $glyphs) {
			const txt = g.structure.replace(/(\r\n|\n|\r)/gm, '');
			if (txt) {
				symbols.push(...txt.split(''));
			}
		}

		// Unique symbols
		return _.uniq(symbols);
	}

	/**
	 * Updating all the syntaxes if there are new symbols
	 */

	for (let syntax of $syntaxes) {
		// Getting all symbols in syntax
		const syntaxSymbols = syntax.rules.map((r) => r.symbol);
		// Checking for additions
		for (let symbol of getUniqueSymbols()) {
			if (!syntaxSymbols.includes(symbol)) {
				syntax.rules.push(createEmptyRule(symbol));
			}
		}
		// Removing if a symbol goes away
		for (let symbol of syntaxSymbols) {
			if (!getUniqueSymbols().includes(symbol)) {
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

	function addSyntax(name: string | null = null) {
		const newSyntax = createEmptySyntax(
			name ? name : nanoid(5),
			nanoid(5),
			getUniqueSymbols()
		);

		$syntaxes = [...$syntaxes, newSyntax];

		$selectedStyle = newSyntax.id;
	}

	// Shorthand function for the button
	function addSyntaxBtn() {
		addSyntax();
	}

	// Creating default syntax (if missing)
	if (!$syntaxes.length) {
		addSyntax('Regular');
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
				<SidebarTile selection={selectedStyle} id={s.id}>
					{s.name}
				</SidebarTile>
			{/each}
		</svelte:fragment>
	</Sidebar>

	<!-- syntax editor -->
	<div class="p-8 space-y-8 overflow-y-auto">
		{#each $syntaxes as s (s.id)}
			{#if s.id == $selectedStyle}
				<div class="flex flex-col mb-8">
					<p class="text-small font-mono text-slate-900 mb-2 text-sm">
						Nome stile
					</p>
					<InputText name="styleName" bind:value={s.name} />
				</div>
				<hr />
				<SyntaxEditor bind:syntax={s} />
			{/if}
		{/each}
	</div>
</div>
