<script lang="ts">
	import type opentype from 'opentype.js';
	import { metrics } from '$lib/stores';
	import { stringify } from 'postcss';

	export let font: opentype.Font;
	export let text: string;
	export let canvasWidth = 600;
	export let canvasHeight = 200;

	function renderFont(el: HTMLCanvasElement) {
		const ctx = el.getContext('2d') as CanvasRenderingContext2D;
		console.log(font.descender);
		const fontSize = (canvasHeight / 5) * 3;
		const unit = fontSize / $metrics.height;
		const y = canvasHeight - unit * $metrics.baseline;
		font.draw(ctx, text, 0, y, fontSize, {
			kerning: false
		});
	}
</script>

<!--  -->

<div>
	<div class="flex flex-row flex-nowrap items-center space-x-8">
		<h2 class="text-lg font-mono">{font.names.fullName.en}</h2>
		<button class="p-2 bg-slate-200 hover:bg-slate-300 font-mono" on:click
			>↓ Download</button
		>
	</div>
	<canvas use:renderFont width={canvasWidth} height={canvasHeight} />
</div>
