<script lang="ts">
	import {
		ValueKind,
		type BooleanValueKind,
		type BooleanProp
	} from '$lib/types';
	import type { BooleanData } from '$lib/types';
	import Select, { type SelectOptions } from '$lib/ui/select.svelte';
	import InputArray from '$lib/ui/inputArray.svelte';
	import Label from '$lib/ui/label.svelte';

	//

	export let prop: BooleanProp;
	export let defaults: Record<BooleanValueKind, BooleanData> = {
		fixed: false,
		choice: { options: [false, true] }
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

	function changePropKind(k: BooleanValueKind) {
		(prop.value.kind = k), (prop.value.data = defaults[k]);
	}

	function changePropKindSelect(e: any) {
		const kind: BooleanValueKind = e.detail;
		changePropKind(kind);
	}

	//

	const modesOptions: SelectOptions<BooleanValueKind> = [
		{ label: 'fixed', value: ValueKind.Fixed },
		{ label: 'choice', value: ValueKind.Choice }
	];

	const booleanOptions: SelectOptions<boolean> = [
		{ label: 'true', value: true },
		{ label: 'false', value: false }
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
				<Select options={booleanOptions} bind:value={prop.value.data} />
			{:else if prop.value.kind == 'choice'}
				<InputArray bind:value={prop.value.data.options} parseBooleans />
			{/if}
		</div>
	</div>
{/if}
