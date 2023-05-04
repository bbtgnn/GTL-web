<script lang="ts">
	import { glyphs, syntaxes, metrics } from '$lib/stores';
	import type { GlyphInput, Syntax } from '$lib/types';

	import type opentype from 'opentype.js';
	import { generateFont } from '$lib/GTL/createFont';
	import { getUnicodeNumber } from '$lib/GTL/unicode';

	import FontDisplay from '$lib/components/fontDisplay.svelte';
	import FontPreviewDynamic from '$lib/components/fontPreviewDynamic.svelte';

	import { onMount } from 'svelte';
	import InputText from '$lib/ui/inputText.svelte';
	import Label from '$lib/ui/label.svelte';

	//

	let previewText = 'akd';
	let previewFonts: Array<opentype.Font> = [];

	let loading = false;

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
		return glyphs;
	}

	async function updatePreviewFonts(previewGlyphs: Array<GlyphInput>) {
		loading = true;
		previewFonts = [];
		try {
			for (let syntax of $syntaxes) {
				if (syntax && syntax.rules.length) {
					const res = await generateFont(syntax, previewGlyphs, $metrics);
					previewFonts = [...previewFonts, res];
				}
			}
		} catch (e) {
			console.log(e);
		}
		loading = false;
	}

	$: updatePreviewFonts(getGlyphsByText(previewText));

	//

	async function downloadFont(s: Syntax) {
		loading = true;
		const font = await generateFont(s, $glyphs, $metrics);
		font.download();
		loading = false;
	}
</script>

<!--  -->

{#if loading}
	<p>loading</p>
{:else}
	<div class="p-8 space-y-8">
		<div class="space-y-2">
			<Label target="previewText">Preview text</Label>
			<InputText name="previewText" bind:value={previewText} />
		</div>
		{#if previewFonts.length}
			{#each previewFonts as previewFont, i}
				<hr />
				<FontDisplay
					bind:font={previewFont}
					bind:text={previewText}
					on:click={() => {
						downloadFont($syntaxes[i]);
					}}
				/>
			{/each}
		{:else}
			<p class="font-mono w-full border-2 border-slate-200 text-slate-300 p-12">
				Crea glifi e sintassi per vedere qui i risultati!
			</p>
		{/if}
	</div>
{/if}
