<script lang="ts">
	import {
		ValueKind,
		type StringData,
		type StringProp,
		type StringValueKind
	} from '$lib/types';
	import Select, { type SelectOptions } from '$lib/ui/select.svelte';
	import InputNumber from '$lib/ui/inputNumber.svelte';
	import InputArray from '$lib/ui/inputArray.svelte';
	import Label from '$lib/ui/label.svelte';
	import InputText from '$lib/ui/inputText.svelte';
	import { assets } from '$app/paths';

	//

	export let prop: StringProp;
	export let defaults: Record<StringValueKind, StringData> = {
		fixed: '',
		choice: { options: [] }
	};

	//

	// Questa variabile serve per evitare che
	// l'HTML si aggiorni prima che si cambi la proprietà data dentro prop
	let tempKind: StringValueKind;

	// Setup
	if (prop) {
		tempKind = prop.value.kind;

		if (tempKind != prop.value.kind) {
			changePropKind(tempKind);
		}
	}

	function changePropKind(k: StringValueKind) {
		(prop.value.kind = k), (prop.value.data = defaults[k]);
	}

	function changePropKindSelect(e: any) {
		const kind: StringValueKind = e.detail;
		changePropKind(kind);
	}

	//

	const modesOptions: SelectOptions<StringValueKind> = [
		{ label: 'fixed', value: ValueKind.Fixed },
		{ label: 'choice', value: ValueKind.Choice }
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
				<InputText bind:value={prop.value.data} />
			{:else if prop.value.kind == 'choice'}
				<InputArray bind:value={prop.value.data.options} />
			{/if}
		</div>
	</div>
{/if}
