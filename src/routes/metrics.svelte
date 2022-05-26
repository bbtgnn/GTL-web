<script lang="ts">
	import { glyphs, syntaxes, metrics } from '$lib/stores';

	import InputText from '$lib/ui/inputText.svelte';
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
