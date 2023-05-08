<script lang="ts">
	import { glyphs, syntaxes, metrics } from '$lib/stores';
	import type { GlyphInput, Syntax } from '$lib/types';

	import { generateFont } from '$lib/GTL/createFont';

	import FontDisplay from '$lib/components/fontDisplay.svelte';
	import FontGenerator from '$lib/partials/fontGenerator.svelte';

	import Label from '$lib/ui/label.svelte';
	import { previewText } from '$lib/stores';
	import Button from '$lib/ui/button.svelte';
	import GlyphsField from '$lib/partials/glyphsField.svelte';

	//

	let previewGlyphs: Array<GlyphInput> = [];

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
		<GlyphsField
			name="previewText"
			bind:text={$previewText}
			bind:glyphs={previewGlyphs}
		/>
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
