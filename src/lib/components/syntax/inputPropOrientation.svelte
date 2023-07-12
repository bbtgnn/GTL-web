<script lang="ts">
	import {
		ValueKind,
		type Orientation,
		type OrientationValueKind,
		type OrientationProp
	} from '$lib/types';
	import type { OrientationData } from '$lib/types';
	import Select, { type SelectOptions } from '$lib/ui/select.svelte';
	import InputArray from '$lib/ui/inputArray.svelte';
	import Label from '$lib/ui/label.svelte';

	//

	export let prop: OrientationProp;
	export let defaults: Record<OrientationValueKind, OrientationData> = {
		fixed: 'NE',
		choice: { options: ['NE', 'NW'] }
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

	function changePropKind(k: OrientationValueKind) {
		(prop.value.kind = k), (prop.value.data = defaults[k]);
	}

	function changePropKindSelect(e: any) {
		const kind: OrientationValueKind = e.detail;
		changePropKind(kind);
	}

	//

	const modesOptions: SelectOptions<OrientationValueKind> = [
		{ label: 'fixed', value: ValueKind.Fixed },
		{ label: 'choice', value: ValueKind.Choice }
	];

	const orientationOptions: SelectOptions<Orientation> = [
		{ label: 'NW', value: 'NW' },
		{ label: 'NE', value: 'NE' },
		{ label: 'SW', value: 'SW' },
		{ label: 'SE', value: 'SE' }
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
				<Select options={orientationOptions} bind:value={prop.value.data} />
			{:else if prop.value.kind == 'choice'}
				<InputArray bind:value={prop.value.data.options} />
			{/if}
		</div>
	</div>
{/if}
