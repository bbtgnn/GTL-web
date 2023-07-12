<script lang="ts">
	import type { FontMetricsKeys } from '$lib/GTL/createFont';
	import { metrics } from '$lib/stores';

	import InputNumber from '$lib/ui/inputNumber.svelte';
	import Label from '$lib/ui/label.svelte';

	const metricsKeys: FontMetricsKeys[] = ['UPM', 'baseline', 'height'];
</script>

<div class="p-8 space-y-8">
	{#each metricsKeys as metric}
		<div class="flex flex-col">
			<Label target={metric}>{metric}</Label>
			<InputNumber name={metric} bind:value={$metrics[metric]} />
		</div>
	{/each}
</div>
