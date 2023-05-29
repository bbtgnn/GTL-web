<script lang="ts">
	import { ValueKind, type StringProp } from '$lib/types';
	import SvgUpload from '$lib/ui/svgUpload.svelte';

	export let prop: StringProp;
</script>

<!--  -->

{#if prop.value.kind == ValueKind.Fixed}
	<SvgUpload bind:dataUrl={prop.value.data} />
{/if}
