<script lang="ts">
	import { glyphs, syntaxes, metrics } from '$lib/stores';
	import type { GlyphInput, Syntax } from '$lib/types';

	import type opentype from 'opentype.js';
	import { generateFont } from '$lib/GTL/createFont';
	import { getUnicodeNumber } from '$lib/GTL/unicode';

	import FontDisplay from '$lib/components/fontDisplay.svelte';
	import FontGenerator from '$lib/partials/fontGenerator.svelte';

	import InputText from '$lib/ui/inputText.svelte';
	import Label from '$lib/ui/label.svelte';
	import { previewText } from '$lib/stores';
	import Button from '$lib/ui/button.svelte';

	/**
	 * Generating font previews
	 */

	function getGlyphByChar(char: string) {
		if (char.length > 1) {
			throw new Error('char must be a single character');
		}
		for (let g of $glyphs) {
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

	let previewGlyphs: Array<GlyphInput> = [];
	$: previewGlyphs = getGlyphsByText($previewText);

	//

	async function downloadFont(s: Syntax) {
		const font = await generateFont(s, $glyphs, $metrics);
		font.download();
	}
</script>

<!--  -->

<div class="grow flex flex-col items-stretch overflow-x-hidden overflow-y-auto">
	<div
		class="p-8 space-y-2 overflow-x-hidden shrink-0 sticky top-0 border-b border-b-gray-200 bg-white"
	>
		<Label target="previewText">Preview text</Label>
		<InputText name="previewText" bind:value={$previewText} grow />
	</div>

	<div class="p-8 space-y-8">
		{#each $syntaxes as syntax (syntax.name)}
			<FontGenerator glyphs={previewGlyphs} {syntax} let:font>
				{#if font}
					<div class="space-y-4">
						<div class="flex flex-row flex-nowrap items-center space-x-8">
							<h2 class="text-lg font-mono">{font.names.fullName.en}</h2>
							<Button
								on:click={() => {
									downloadFont(syntax);
								}}>↓ Download</Button
							>
						</div>
						<FontDisplay {font} bind:text={$previewText} />
					</div>
				{/if}
			</FontGenerator>
		{/each}
	</div>
</div>
