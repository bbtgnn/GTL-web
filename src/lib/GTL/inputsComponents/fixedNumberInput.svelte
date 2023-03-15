<script lang="ts">
	import InputNumber from '$lib/ui/inputNumber.svelte';
	import type { FixedInputData } from '../inputs/fixed';

	export let data: FixedInputData<number>;
</script>

<InputNumber bind:value={data} />
