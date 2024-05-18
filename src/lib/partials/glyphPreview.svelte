<script lang="ts">
	import FontDisplay from '$lib/partials/fontDisplay.svelte';
	import { syntaxes, selectedGlyph, glyphs, metrics } from '$lib/stores';
	import type { GlyphInput } from '$lib/types';
	import { getUnicodeNumber } from '$lib/GTL/unicode';
	import FontGenerator from './fontGenerator.svelte';
	import ScrollArea from '$lib/components/ui/scroll-area/scroll-area.svelte';
	import Sidebar from '$lib/ui/sidebar.svelte';

	//

	let currentGlyph: GlyphInput | undefined;
	$: currentGlyph = $glyphs.find((g) => g.id === $selectedGlyph);

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

<Sidebar position="right" class="w-fit gap-8 px-8">
	<p class="title-sm">Anteprima</p>
	{#if currentGlyph}
		<ScrollArea>
			<div class="space-y-8">
				{#each $syntaxes as syntax}
					<FontGenerator {syntax} glyphs={[currentGlyph]} let:font>
						{#if font}
							<div class="space-y-2">
								<p class="text-sm font-medium capitalize tracking-wide">
									{font.names.fontSubfamily.en}
								</p>
								<FontDisplay canvasWidth={300} {font} text={currentGlyphText} />
							</div>
						{/if}
					</FontGenerator>
				{/each}
			</div>
		</ScrollArea>
	{:else}
		<p>Glifo non trovato</p>
	{/if}
</Sidebar>
