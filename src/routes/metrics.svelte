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
<div class="font-mono px-8 pb-8 flex flex-col space-y-2">
	<p class="font-bold">! IMPORTANT !</p>
	<ul class="list-disc pl-4 space-y-2">
		<li>UPM value MUST be a multiple of 2 and / or 5.</li>
		<li>
			High UPM values are recommendend for fonts with:
			<ul class="list-disc pl-4">
				<li>a lot of small details</li>
				<li>more than 1 boxRow and / or more than 1 boxCol.</li>
			</ul>
		</li>
	</ul>
</div>
