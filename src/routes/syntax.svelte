<script lang="ts">
	import { createEmptySyntax, createEmptyRule } from '$lib/types';
	import type { Syntax, Rule } from '$lib/types';
	import { syntaxes, glyphs } from '$lib/stores';
	import { nanoid } from 'nanoid';
	import _ from 'lodash';

	import SyntaxEditor from '$lib/components/syntax/syntax.svelte';
	import InputText from '$lib/ui/inputText.svelte';
	import Label from '$lib/ui/label.svelte';

	//

	let current: number;

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
	 * Creating default syntax
	 */

	if (!$syntaxes.length) {
		const name = 'Regular';
		addSyntax(name);
	}

	function addSyntax(name: string | null = null) {
		if (!name) {
			name = nanoid(5);
		}
		$syntaxes = [...$syntaxes, createEmptySyntax(name, getUniqueSymbols())];
		current = $syntaxes.length - 1;
	}

	//

	function changeSyntax(syntax: Syntax) {
		current = $syntaxes.indexOf(syntax);
	}

	$: if (!current && $syntaxes.length) {
		current = 0;
	}
</script>

<!--  -->

<div class="flex flex-row flex-nowrap">
	<!-- sidebar -->
	<div class="flex basis-60 flex-col flex-nowrap gap-2 p-4 bg-slate-100">
		<button
			class="flex bg-slate-200 mb-4 p-3 hover:bg-slate-300"
			on:click={() => {
				addSyntax();
			}}>+ Add syntax</button
		>

		{#each $syntaxes as syntax, i (syntax.name)}
			<div
				class:bg-slate-300={i != current}
				class:bg-slate-400={i == current}
				class="px-3 py-1"
				on:click={() => {
					changeSyntax(syntax);
				}}
			>
				{syntax.name}
			</div>
		{/each}
	</div>

	<!-- syntax editor -->
	<div class="p-8">
		{#each $syntaxes as syntax, i}
			{#if i == current}
				<div class="flex flex-col mb-8">
					<div class="mb-2">
						<Label target="SyntaxName">Nome sintassi</Label>
					</div>
					<InputText name="SyntaxName" bind:value={syntax.name} />
				</div>
				<hr class="mb-8" />
				<SyntaxEditor bind:syntax />

				<pre>{JSON.stringify(syntax, null, 2)}</pre>
			{/if}
		{/each}
	</div>
</div>
