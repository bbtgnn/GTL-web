<script lang="ts">
	import type opentype from 'opentype.js';

	export let font: opentype.Font;
	export let text: string;
	export let size: number;

	function renderFont(el: HTMLCanvasElement) {
		const ctx = el.getContext('2d') as CanvasRenderingContext2D;
		// font.draw(ctx, text, 0, 200, size, {
		// 	kerning: false
		// });
	}

	function download() {
		font.download();
	}
</script>

<!--  -->

<canvas use:renderFont width="600" height="300" class="border-2" />
<button class="p-4 bg-slate-200 hover:bg-slate-300" on:click={download}
	>Scarica font!</button
>
