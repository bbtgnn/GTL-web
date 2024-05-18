<script lang="ts">
	import FontDisplay from '$lib/partials/fontDisplay.svelte';
	import { syntaxes, selectedGlyph, glyphs, metrics } from '$lib/stores';
	import type { GlyphInput } from '$lib/types';
	import { getUnicodeNumber } from '$lib/GTL/unicode';
	import FontGenerator from './fontGenerator.svelte';

	//

	let currentGlyph: GlyphInput | undefined;
	$: if ($selectedGlyph) currentGlyph = $glyphs.find((g) => g.id === $selectedGlyph);

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
</script>

<div class="space-y-8">
	<p class="text-small font-mono text-sm text-slate-900">Anteprima</p>
	{#if currentGlyph}
		{#each $syntaxes as syntax}
			<FontGenerator {syntax} glyphs={[currentGlyph]} let:font>
				{#if font}
					<div class="space-y-2">
						<p class="text-small font-mono text-sm text-slate-900">
							{font.names.fontSubfamily.en}
						</p>
						<FontDisplay canvasWidth={300} {font} text={currentGlyphText} />
					</div>
				{/if}
			</FontGenerator>
		{/each}
	{:else}
		<p>No glyphs</p>
	{/if}
</div>
