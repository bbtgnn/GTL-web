<script lang="ts">
	import { glyphs, syntaxes, metrics } from '$lib/stores';
	import type { GlyphInput, Syntax } from '$lib/types';

	import { generateFont } from '$lib/GTL/createFont';

	import FontDisplay from '$lib/partials/fontDisplay.svelte';
	import FontGenerator from '$lib/partials/fontGenerator.svelte';

	import Label from '$lib/ui/label.svelte';
	import { previewText } from '$lib/stores';
	import Button from '$lib/ui/button.svelte';
	import GlyphsField from '$lib/partials/glyphsField.svelte';

	//

	let previewGlyphs: Array<GlyphInput> = [];
	let validText = '';

	async function downloadFont(s: Syntax) {
		const font = await generateFont(s, $glyphs, $metrics);
		font.download();
	}
</script>

<!--  -->

<div class="flex grow flex-col items-stretch overflow-y-auto overflow-x-hidden">
	<div
		class="sticky top-0 shrink-0 space-y-2 overflow-x-hidden border-b border-b-gray-200 bg-white p-8"
	>
		<Label target="previewText">Preview text</Label>
		<GlyphsField
			name="previewText"
			bind:text={$previewText}
			bind:glyphs={previewGlyphs}
			bind:validText
		/>
	</div>

	<div class="space-y-8 p-8">
		{#each $syntaxes as syntax (syntax.name)}
			<FontGenerator glyphs={previewGlyphs} {syntax} let:font>
				{#if font}
					<div class="space-y-4">
						<div class="flex flex-row flex-nowrap items-center space-x-8">
							<h2 class="font-mono text-lg">{font.names.fullName.en}</h2>
							<Button
								on:click={() => {
									downloadFont(syntax);
								}}>↓ Download</Button
							>
						</div>
						<FontDisplay {font} bind:text={validText} />
					</div>
				{/if}
			</FontGenerator>
		{/each}
	</div>
</div>
