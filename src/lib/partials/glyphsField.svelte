<script lang="ts">
	import { glyphs as glyphsStore } from '$lib/stores';
	import type { GlyphInput } from '$lib/types';

	import { getUnicodeNumber } from '$lib/GTL/unicode';

	import InputText from '$lib/ui/inputText.svelte';
	import { previewText } from '$lib/stores';

	/**
	 * Generating font previews
	 */

	export let text = '';
	export let glyphs: Array<GlyphInput> = [];
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
		let glyphs: Array<GlyphInput> = [];
		for (let c of text) {
			const g = getGlyphByChar(c);
			if (g) {
				glyphs.push(g);
			}
		}
		return [...new Set(glyphs)];
	}

	$: glyphs = getGlyphsByText($previewText);
</script>

<!--  -->

<InputText {name} bind:value={text} grow />
