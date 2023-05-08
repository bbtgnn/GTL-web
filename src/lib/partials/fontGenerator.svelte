<script lang="ts">
	import { generateFont } from '$lib/GTL/createFont';
	import { metrics } from '$lib/stores';
	import type { GlyphInput, Syntax } from '$lib/types';

	export let syntax: Syntax;
	export let glyphs: Array<GlyphInput>;

	let fontPromise: Promise<opentype.Font>;
	$: fontPromise = generateFont(syntax, glyphs, $metrics);
</script>

{#await fontPromise}
	<p>loading</p>
{:then font}
	<slot {font} />
{/await}
