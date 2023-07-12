<script lang="ts">
	import { glyphs as glyphsStore } from '$lib/stores';
	import type { GlyphInput } from '$lib/types';
	import { getUnicodeNumber } from '$lib/GTL/unicode';

	import InputText from '$lib/ui/inputText.svelte';

	/**
	 * Generating font previews
	 */

	export let text = '';
	export let glyphs: Array<GlyphInput> = [];
	export let validText = '';
	export let name = 'previewText';

	function getGlyphByChar(char: string) {
		if (char.length > 1) {
			throw new Error('char must be a single character');
		}
		for (let g of $glyphsStore) {
			try {
				if (getUnicodeNumber(g.name) === char.charCodeAt(0)) {
					return g;
				}
			} catch (e) {
				console.log(e, g.name);
			}
		}
	}

	function getGlyphsByText(text: string) {
		let foundGlyphs: Array<GlyphInput> = [];
		let missingGlyphs: Array<string> = [];
		for (let character of text) {
			const glyph = getGlyphByChar(character);
			if (glyph) foundGlyphs.push(glyph);
			else missingGlyphs.push(character);
		}
		return { found: [...new Set(foundGlyphs)], missing: missingGlyphs };
	}

	function cleanText(text: string, toRemove: string[]) {
		let cleanedText = text;
		for (let c of toRemove) {
			cleanedText = cleanedText.replace(c, '');
		}
		return cleanedText;
	}

	$: {
		const glyphSearch = getGlyphsByText(text);
		glyphs = glyphSearch.found;
		validText = cleanText(text, glyphSearch.missing);
	}
</script>

<!--  -->

<InputText {name} bind:value={text} grow />
