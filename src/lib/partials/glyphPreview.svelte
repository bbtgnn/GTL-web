<script lang="ts">
	import FontDisplay from '$lib/components/fontDisplay.svelte';
	import type { Syntax } from '$lib/types/syntax';
	import { syntaxes, selectedGlyph, glyphs, metrics } from '$lib/stores';
	import type { GlyphInput } from '$lib/types';
	import { generateFont } from '$lib/GTL/createFont';
	import { getUnicodeNumber } from '$lib/GTL/unicode';
	import { load } from 'opentype.js';
	import Label from '$lib/ui/label.svelte';

	//

	let loading = false;

	let currentGlyph: GlyphInput | undefined;
	$: if ($selectedGlyph)
		currentGlyph = $glyphs.find((g) => g.id === $selectedGlyph);

	let currentGlyphText: string;
	$: if (currentGlyph) currentGlyphText = getCharFromGlyph(currentGlyph);

	function getCharFromGlyph(glyph: GlyphInput) {
		try {
			return String.fromCharCode(getUnicodeNumber(glyph.name));
		} catch (e) {
			console.log(e);
			return '';
		}
	}

	let previewFonts: Array<opentype.Font> = [];
	$: if (currentGlyph) createGlyphPreview(currentGlyph);

	async function createGlyphPreview(currentGlyph: GlyphInput) {
		if (!currentGlyph) return;
		loading = true;
		previewFonts = [];
		try {
			for (let syntax of $syntaxes) {
				if (syntax && syntax.rules.length) {
					const res = await generateFont(syntax, [currentGlyph], $metrics);
					previewFonts = [...previewFonts, res];
				}
			}
		} catch (e) {
			console.log(e);
		}
		loading = false;
	}
</script>

<div class="space-y-8">
	<p class="text-small font-mono text-slate-900 text-sm">Anteprima</p>
	{#if currentGlyph}
		{#if loading}
			<p>loading</p>
		{:else if previewFonts.length && currentGlyphText}
			{#each previewFonts as previewFont, i}
				<div class="space-y-2">
					<p class="text-small font-mono text-slate-900 text-sm">
						{previewFont.names.fontSubfamily.en}
					</p>
					<FontDisplay
						canvasWidth={300}
						font={previewFont}
						text={currentGlyphText}
					/>
				</div>
			{/each}
		{/if}
	{:else}
		<p>No glyphs</p>
	{/if}
</div>
