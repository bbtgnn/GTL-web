<script lang="ts" context="module">
	export type TooltipState = 'positive' | 'negative' | 'neutral';
</script>

<script lang="ts">
	import { fade } from 'svelte/transition';

	export let state: TooltipState = 'positive';
	export let duration = 3000;
	export let visible = false;

	$: if (visible && state == 'positive') {
		setTimeout(() => {
			visible = false;
		}, duration);
	}
</script>

<!--  -->

{#if visible}
	<div
		out:fade
		class="p-4"
		class:bg-red-300={state == 'negative'}
		class:bg-gold-300={state == 'neutral'}
		class:bg-green-300={state == 'positive'}
	>
		<slot />
	</div>
{/if}
