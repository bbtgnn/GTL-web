<script lang="ts">
	import InputArray from '$lib/ui/inputArray.svelte';
	import type { ChoiceInputData } from '../inputs/inputs';

	export let data: ChoiceInputData<number>;
</script>

<InputArray bind:value={data} parseNumbers />
