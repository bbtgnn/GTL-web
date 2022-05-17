<script lang="ts">
	import SyntaxEditor from '$lib/components/syntax/syntax.svelte';
	import { createEmptySyntax, createEmptyRule } from '$lib/types';
	import { syntaxes, glyphs } from '$lib/stores';
	import { nanoid } from 'nanoid';
	import _ from 'lodash';

	//

	let current: string;

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

	for (let key of Object.keys($syntaxes)) {
		const syntax = $syntaxes[key];
		const syntaxSymbols = syntax.map((r) => r.symbol);
		for (let symbol of getUniqueSymbols()) {
			if (!syntaxSymbols.includes(symbol)) {
				syntax.push(createEmptyRule(symbol));
			}
		}
	}

	/**
	 * Creating default syntax
	 */

	if (!$syntaxes.length) {
		const name = 'Regular';
		addSyntax(name);
		current = name;
	}

	function addSyntax(name: string | null = null) {
		if (!name) {
			name = nanoid(5);
		}
		$syntaxes[name] = createEmptySyntax(getUniqueSymbols());
		current = name;
	}

	//

	function changeSyntax(name: string) {
		current = name;
	}

	$: if (!current && $syntaxes.length) {
		current = Object.keys($syntaxes)[0];
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

		{#each Object.keys($syntaxes) as sname}
			<div
				class:bg-slate-300={sname != current}
				class:bg-slate-400={sname == current}
				class="px-3 py-1"
				on:click={() => {
					changeSyntax(sname);
				}}
			>
				{sname}
			</div>
		{/each}
	</div>

	<!-- syntax editor -->
	<div class="p-4">
		{#each Object.keys($syntaxes) as sname}
			{#if sname == current}
				<SyntaxEditor bind:syntax={$syntaxes[sname]} />

				<pre>{JSON.stringify($syntaxes[sname], null, 2)}</pre>
			{/if}
		{/each}
	</div>
</div>
