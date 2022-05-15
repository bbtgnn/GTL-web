<script lang="ts">
	import SyntaxEditor from '$lib/components/syntax/syntax.svelte';
	import { createEmptySyntax } from '$lib/types';
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
	 * TODO
	 */

	// for (let key of Object.keys($syntaxes)) {
	// 	const syntax = $syntaxes[key]

	/**
	 * Creating default syntax
	 */

	if (!Object.keys($syntaxes).length) {
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

	//

	// // Getting unique symbols
	// $: if ($glyphs.length) {
	// 	const symbols = getUniqueSymbols();
	// 	symbols.forEach((s) => {
	// 		if (!(s in $syntaxes)) {
	// 		}
	// 	});
	// }
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
