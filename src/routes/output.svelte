<script lang="ts">
	import { glyphs, syntaxes, metrics } from '$lib/stores';

	import type opentype from 'opentype.js';
	import { generateFont } from '$lib/GTL/createFont';

	import FontDisplay from '$lib/components/fontDisplay.svelte';

	import InputText from '$lib/ui/inputText.svelte';
	import InputNumber from '$lib/ui/inputNumber.svelte';
	import Label from '$lib/ui/label.svelte';

	//

	let fonts: Array<opentype.Font> = [];

	let text: string = 'a';
	let size: number = 72;

	for (let syntax of $syntaxes) {
		if (syntax) {
			const font = generateFont(syntax, $glyphs, $metrics);
			fonts.push(font);
			fonts = fonts;
		}
	}
</script>

<!--  -->

<div class="p-4">
	{#if fonts.length}
		<div class="flex flex-col">
			<Label target="text">Scrivi qui :D</Label>
			<InputText name="text" bind:value={text} />
		</div>

		{#each fonts as font}
			<div class="mt-4">
				<FontDisplay {font} bind:text {size} />
			</div>
		{/each}
	{/if}
</div>
