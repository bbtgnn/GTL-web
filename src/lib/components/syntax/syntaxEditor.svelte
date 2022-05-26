<script lang="ts">
	import type { Syntax } from '$lib/types';
	import SyntaxRule from './syntaxRule.svelte';

	export let syntax: Syntax;
</script>

<!--  -->

<p class="text-small font-mono text-slate-900 mb-2 text-sm">Regole sintassi</p>
<div class="block space-y-8">
	{#if syntax.rules.length}
		<!-- Rule -->
		{#each syntax.rules as rule (rule.symbol)}
			<SyntaxRule bind:rule />
		{/each}
	{:else}
		<!-- Placeholder -->
		<p class="font-mono w-full border-2 border-slate-200 text-slate-300 p-12">
			Inizia a disegnare un glifo per modificare la sintassi!
		</p>
	{/if}
</div>
