<script lang="ts">
	import { metrics } from '$lib/stores';

	import InputNumber from '$lib/ui/inputNumber.svelte';
	import Label from '$lib/ui/label.svelte';

	/**
	 * Auto-calc from letters
	 */
</script>

<div class="p-8 flex flex-row flex-nowrap space-x-8">
	{#each Object.keys($metrics) as metric}
		<div class="flex flex-col">
			<Label target={metric}>{metric}</Label>
			<InputNumber name={metric} bind:value={$metrics[metric]} />
		</div>
	{/each}
</div>
<p class="font-mono px-8 pb-8 flex flex-col">
	<span class="font-bold">! IMPORTANT !</span>
	<span>UPM value MUST be a multiple of 2 and / or 5.</span>
</p>
