<script lang="ts">
	import SyntaxEditor from '$lib/components/syntax/syntax.svelte';
	import { type Syntax, ShapeKind, createEmptySyntax } from '$lib/types';
	import { syntaxes } from '$lib/stores';
	import { nanoid } from 'nanoid';

	//

	let symbols = ['@', '#', 'a'];

	if (!('default' in $syntaxes)) {
		$syntaxes['default'] = createEmptySyntax(symbols);
	}

	function addSyntax() {
		$syntaxes[nanoid(5)] = createEmptySyntax(symbols);
	}

	let current = 'default';

	function changeSyntax(n: string) {
		current = n;
	}
</script>

<!--  -->

<div class="flex flex-row flex-nowrap">
	<!-- sidebar -->
	<div class="flex flex-col flex-nowrap gap-4 p-4">
		{#each Object.keys($syntaxes) as sname}
			<div
				on:click={() => {
					changeSyntax(sname);
				}}
			>
				{sname}
			</div>
		{/each}

		<button
			class="flex bg-slate-200 p-3 hover:bg-slate-300"
			on:click={addSyntax}>+ Add syntax</button
		>
	</div>

	<!-- syntax editor -->
	<div>
		{#each Object.keys($syntaxes) as sname}
			{#if sname == current}
				<SyntaxEditor bind:syntax={$syntaxes[sname]} />

				<pre>{JSON.stringify($syntaxes[sname], null, 2)}</pre>
			{/if}
		{/each}
	</div>
</div>
