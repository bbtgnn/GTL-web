<script lang="ts">
	import type { Syntax } from '$lib/types';
	import SyntaxRule from './syntaxRule.svelte';

	export let syntax: Syntax;
</script>

<!--  -->

<div class="flex flex-col flex-nowrap gap-4">
	{#each syntax as rule (rule.symbol)}
		<div class="flex flex-row flex-nowrap gap-4">
			<SyntaxRule bind:rule />
		</div>
	{/each}
</div>
