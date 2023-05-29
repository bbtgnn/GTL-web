<script lang="ts" context="module">
	import { writable } from 'svelte/store';
	export const syntaxPreviewText = writable('hello');
</script>

<script lang="ts">
	import FontGenerator from './fontGenerator.svelte';
	import FontDisplay from '$lib/components/fontDisplay.svelte';
	import GlyphsField from './glyphsField.svelte';
	import type { GlyphInput, Syntax } from '$lib/types';
	import Label from '$lib/ui/label.svelte';

	export let syntax: Syntax;

	let glyphs: Array<GlyphInput> = [];
	let validText = '';
</script>

<div class="space-y-8">
	<div
		class="space-y-2 overflow-x-hidden shrink-0 sticky top-0 border-b border-b-gray-200 bg-white"
	>
		<Label target="previewText">Preview text</Label>
		<GlyphsField
			name="previewText"
			bind:text={$syntaxPreviewText}
			bind:glyphs
			bind:validText
		/>
	</div>

	{#if glyphs.length && syntax}
		<FontGenerator {syntax} {glyphs} let:font>
			{#if font}
				<FontDisplay {font} text={validText} />
			{/if}
		</FontGenerator>
	{/if}
</div>
