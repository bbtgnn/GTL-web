<script lang="ts" context="module">
	import { writable } from 'svelte/store';
	export const syntaxPreviewText = writable('hello');
</script>

<script lang="ts">
	import FontDisplay2 from '$lib/partials/fontDisplay2.svelte';
	import GlyphsField from './glyphsField.svelte';
	import type { GlyphInput, Syntax } from '$lib/types';
	import Label from '$lib/ui/label.svelte';
	import { metrics } from '$lib/stores';
	import { generateFont } from '$lib/GTL/createFont';

	export let syntax: Syntax;

	let glyphs: Array<GlyphInput> = [];
	let validText = '';

	let font: opentype.Font;
	$: generateFont(syntax, glyphs, $metrics).then((res) => {
		font = res;
	});
</script>

<div class="space-y-8">
	<div
		class="sticky top-0 shrink-0 space-y-2 overflow-x-hidden border-b border-b-gray-200 bg-white"
	>
		<Label target="previewText">Preview text</Label>
		<GlyphsField name="previewText" bind:text={$syntaxPreviewText} bind:glyphs bind:validText />
	</div>

	{#if font}
		<FontDisplay2 {font} text={validText} />
	{/if}
</div>
