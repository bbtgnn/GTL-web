<script lang="ts">
	import type opentype from 'opentype.js';
	import { metrics } from '$lib/stores';

	export let font: opentype.Font;
	export let text: string;
	export let canvasWidth = 600;
	export let canvasHeight = 150;

	function renderFont(el: HTMLCanvasElement) {
		const ctx = el.getContext('2d', {
			willReadFrequently: true
		}) as CanvasRenderingContext2D;
		const fontSize = canvasHeight;
		const unit = fontSize / $metrics.height;
		const y = canvasHeight - unit * $metrics.baseline;
		font.draw(ctx, text, 0, y, fontSize, {
			kerning: false
		});
	}
</script>

<canvas
	class="bg-gray-100 p-10"
	use:renderFont
	width={canvasWidth}
	height={canvasHeight}
/>
