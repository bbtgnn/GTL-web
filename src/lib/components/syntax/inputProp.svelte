<script lang="ts">
	import {
		PropKind,
		ValueKind,
		type Prop,
		type NumberData,
		type OrientationData,
		type BooleanData
	} from '$lib/types';
	import Select, { type SelectOptions } from '$lib/ui/select.svelte';
	import InputNumber from '$lib/ui/inputNumber.svelte';
	import InputArray from '$lib/ui/inputArray.svelte';

	//

	export let prop: Prop;
	// export let baseValues = {def: 1, min: 1, max: 1}; // to implement

	//

	// Questa variabile serve per evitare che
	// l'HTML si aggiorni prima che si cambi la proprietà data dentro prop
	let tempKind = prop.value.kind;

	//

	changeProp();

	function changeProp() {
		if (prop) {
			if (prop.kind == PropKind.Number) {
				const data: Record<ValueKind, NumberData> = {
					fixed: 1,
					choice: { options: [1, 2] },
					range: { min: 1, max: 2 }
				};
				prop.value.data = data[tempKind];
			} else if (prop.kind == PropKind.Orientation) {
				const data: Record<
					ValueKind.Choice | ValueKind.Fixed,
					OrientationData
				> = {
					fixed: 'NE',
					choice: { options: ['NE', 'NW'] }
				};
				prop.value.data = data[tempKind as ValueKind.Choice | ValueKind.Fixed];
			} else if (prop.kind == PropKind.Boolean) {
				const data: Record<ValueKind.Choice | ValueKind.Fixed, BooleanData> = {
					fixed: false,
					choice: { options: [true, false] }
				};
				prop.value.data = data[tempKind as ValueKind.Choice | ValueKind.Fixed];
			}
			prop.value.kind = tempKind;
		}
	}

	//

	const modesOptions: SelectOptions<ValueKind> = [
		{ label: 'fixed', value: ValueKind.Fixed },
		{ label: 'choice', value: ValueKind.Choice },
		{ label: 'range', value: ValueKind.Range }
	];
</script>

<!--  -->

{#if prop}
	<div class="flex flex-row gap-2">
		<Select
			options={modesOptions}
			bind:value={tempKind}
			on:change={changeProp}
		/>

		<div class="flex flex-row gap-2">
			{#if prop.value.kind == 'fixed'}
				{#if prop.kind == 'number'}
					<InputNumber bind:value={prop.value.data} />
				{:else if prop.kind == 'orientation'}
					<!-- Input select orientation -->
				{:else if prop.kind == 'boolean'}
					<!-- Input radio here -->
				{/if}
			{:else if prop.value.kind == 'range'}
				<InputNumber bind:value={prop.value.data.min} />
				<InputNumber bind:value={prop.value.data.max} />
			{:else if prop.value.kind == 'choice'}
				<InputArray bind:value={prop.value.data.options} />
				<!-- Qui bisogna fare il parsing dei boolean o degli interi a seconda del caso -->
			{/if}
		</div>
	</div>
{/if}
