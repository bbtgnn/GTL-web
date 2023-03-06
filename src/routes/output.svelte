<script lang="ts">
	import { glyphs, syntaxes, metrics } from '$lib/stores';
	import type { Syntax } from '$lib/types';

	import type opentype from 'opentype.js';
	import { generateFont } from '$lib/GTL/createFont';
	import { getUnicodeNumber } from '$lib/GTL/unicode';

	import FontDisplay from '$lib/components/fontDisplay.svelte';

	import { onMount } from 'svelte';

	//

	let previewFonts: Array<opentype.Font> = [];
	let previewText = '';

	/**
	 * Generating font previews
	 */

	onMount(() => {
		// Exit if glyphs missing
		if (!$glyphs.length) {
			return;
		}

		// Selecting glyphs to preview
		const previewGlyphs = [];
		for (let i = 0; i < 3; i++) {
			if ($glyphs[i]) {
				previewGlyphs.push($glyphs[i]);
			} else {
				break;
			}
		}

		// Generating text to write
		// Getting unicode from table
		for (let g of previewGlyphs) {
			try {
				const uni = getUnicodeNumber(g.name);
				previewText += String.fromCharCode(uni);
			} catch (e) {
				console.log(e);
			}
		}

		for (let syntax of $syntaxes) {
			if (syntax && syntax.rules.length) {
				// Generating previews
				const previewFont = generateFont(syntax, previewGlyphs, $metrics);
				previewFonts = [...previewFonts, previewFont];
			}
		}
	});

	//

	let loading = false;

	function downloadFont(s: Syntax) {
		loading = true;
		const font = generateFont(s, $glyphs, $metrics);
		font.download();
		loading = false;
	}
</script>

<!--  -->

{#if loading}
	loading
{/if}

<div class="p-8">
	{#if previewFonts.length}
		{#each previewFonts as previewFont, i}
			<FontDisplay
				font={previewFont}
				text={previewText}
				on:click={() => {
					downloadFont($syntaxes[i]);
				}}
			/>
			<hr class="my-8" />
		{/each}
	{:else}
		<!-- Placeholder -->
		<p class="font-mono w-full border-2 border-slate-200 text-slate-300 p-12">
			Crea glifi e sintassi per vedere qui i risultati!
		</p>
	{/if}
</div>
