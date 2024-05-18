<script lang="ts">
	import { ValueKind, type NumberProp } from '$lib/types';
	import type { NumberData } from '$lib/types';
	import Select, { type SelectOptions } from '$lib/ui/select.svelte';
	import InputNumber from '$lib/ui/inputNumber.svelte';
	import InputArray from '$lib/ui/inputArray.svelte';
	import Label from '$lib/ui/label.svelte';

	//

	export let prop: NumberProp;
	export let defaults: Record<ValueKind, NumberData> = {
		fixed: 1,
		choice: { options: [1, 2] },
		range: {
			min: 1,
			max: 2
		}
	};

	//

	// Questa variabile serve per evitare che
	// l'HTML si aggiorni prima che si cambi la proprietà data dentro prop
	let tempKind: ValueKind;

	// Setup
	if (prop) {
		tempKind = prop.value.kind;

		if (tempKind != prop.value.kind) {
			changePropKind(tempKind);
		}
	}

	function changePropKind(k: ValueKind) {
		(prop.value.kind = k), (prop.value.data = defaults[k]);
	}

	function changePropKindSelect(e: any) {
		const kind: ValueKind = e.detail;
		changePropKind(kind);
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
	<div class="flex flex-row space-x-4">
		<Select
			options={modesOptions}
			bind:value={tempKind}
			on:changed={changePropKindSelect}
		/>

		<div class="flex flex-row space-x-2">
			{#if prop.value.kind == 'fixed'}
				<InputNumber bind:value={prop.value.data} />
			{:else if prop.value.kind == 'range'}
				<div class="space-y-2">
					<div class="flex flex-row flex-nowrap items-center space-x-2">
						<InputNumber name="min" bind:value={prop.value.data.min} />
						<Label target="min">min</Label>
					</div>
					<div class="flex flex-row flex-nowrap items-center space-x-2">
						<InputNumber name="max" bind:value={prop.value.data.max} />
						<Label target="max">max</Label>
					</div>
				</div>
			{:else if prop.value.kind == 'choice'}
				<InputArray bind:value={prop.value.data.options} parseNumbers />
			{/if}
		</div>
	</div>
{/if}
