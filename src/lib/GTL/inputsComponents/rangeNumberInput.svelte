<script lang="ts">
	import InputNumber from '$lib/ui/inputNumber.svelte';
	import Label from '$lib/ui/label.svelte';
	import type { RangeInputData } from '../inputs/range';

	export let data: RangeInputData;
</script>

<div class="space-y-2">
	<div class="flex flex-row flex-nowrap items-center space-x-2">
		<InputNumber name="min" bind:value={data.min} />
		<Label target="min">min</Label>
	</div>
	<div class="flex flex-row flex-nowrap items-center space-x-2">
		<InputNumber name="max" bind:value={data.max} />
		<Label target="max">max</Label>
	</div>
</div>
