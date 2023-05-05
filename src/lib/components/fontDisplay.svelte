<script lang="ts">
	import type opentype from 'opentype.js';
	import { metrics } from '$lib/stores';
	import Button from '$lib/ui/button.svelte';

	export let font: opentype.Font;
	export let text: string;
	export let canvasWidth = 600;
	export let canvasHeight = 150;

	function renderFont(el: HTMLCanvasElement) {
		const ctx = el.getContext('2d') as CanvasRenderingContext2D;
		const fontSize = canvasHeight;
		const unit = fontSize / $metrics.height;
		const y = canvasHeight - unit * $metrics.baseline;
		font.draw(ctx, text, 0, y, fontSize, {
			kerning: false
		});
	}
</script>

<!--  -->

<div class="space-y-4">
	<div class="flex flex-row flex-nowrap items-center space-x-8">
		<h2 class="text-lg font-mono">{font.names.fullName.en}</h2>
		<Button on:click>↓ Download</Button>
	</div>
	<canvas
		class="bg-gray-100 p-10"
		use:renderFont
		width={canvasWidth}
		height={canvasHeight}
	/>
</div>
