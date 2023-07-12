<script lang="ts">
	import { ValueKind, type StringProp, type StringValueKind, type StringData } from '$lib/types';
	import SvgUpload from '$lib/ui/svgUpload.svelte';
	import Select, { type SelectOptions } from '$lib/ui/select.svelte';
	import SelectSvgFolders from '$lib/ui/selectSvgFolders.svelte';

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
		<Select options={modesOptions} bind:value={tempKind} on:changed={changePropKindSelect} />

		<div class="flex flex-row space-x-2">
			{#if prop.value.kind == ValueKind.Fixed}
				<SvgUpload bind:dataUrl={prop.value.data} />
			{:else if prop.value.kind == ValueKind.Choice}
				<SelectSvgFolders bind:selected={prop.value.data.options} />
			{/if}
		</div>
	</div>
{/if}
