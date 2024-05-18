<script lang="ts">
	import type opentype from 'opentype.js';
	import InputNumber from '$lib/ui/inputNumber.svelte';
	import Label from '$lib/ui/label.svelte';
	import { nanoid } from 'nanoid';
	import Button from '$lib/ui/button.svelte';

	export let font: opentype.Font;
	export let text: string;

	let canvasWidth = 600;
	let canvasHeight = 300;
	let fontSize = canvasHeight / 2;
	let x = fontSize / 5;
	let y = fontSize / 5;

	let canvas: HTMLCanvasElement;

	$: render(font, canvas, text, fontSize, x, y, canvasWidth, canvasHeight);

	function refresh() {
		render(font, canvas, text, fontSize, x, y, canvasWidth, canvasHeight);
	}

	function render(
		font: opentype.Font,
		canvas: HTMLCanvasElement,
		text: string,
		fontSize: number,
		x: number,
		y: number,
		canvasWidth: number,
		canvasHeight: number
	) {
		try {
			if (!canvas) return;
			if (!font) return;

			const ctx = canvas.getContext('2d', {
				willReadFrequently: true
			}) as CanvasRenderingContext2D;

			ctx.reset();

			font.draw(ctx, text, x, canvasHeight - y, fontSize, {
				kerning: false
			});
		} catch (e) {}
	}

	const id = nanoid(5);
</script>

<div>
	<div class="flex gap-4 items-end">
		<div>
			<Label target={`${id}-size`}>Font size</Label>
			<InputNumber name={`${id}-size`} bind:value={fontSize} />
		</div>
		<div>
			<Label target={`${id}-x`}>Text X</Label>
			<InputNumber name={`${id}-x`} bind:value={x} />
		</div>
		<div>
			<Label target={`${id}-y`}>Text Y</Label>
			<InputNumber name={`${id}-y`} bind:value={y} />
		</div>

		<div>
			<Label target={`${id}-cw`}>Canvas width</Label>
			<InputNumber name={`${id}-ch`} bind:value={canvasWidth} />
		</div>

		<div>
			<Label target={`${id}-ch`}>Canvas height</Label>
			<InputNumber name={`${id}-cw`} bind:value={canvasHeight} />
		</div>

		<div>
			<Button on:click={refresh}>Refresh</Button>
		</div>
	</div>

	<p class="mt-2 text-gray-400">
		Importante! Se ridimensionate il canvas e non vedete nulla, cliccate il pulsante "Refresh"
	</p>
</div>

<canvas bind:this={canvas} class="bg-gray-100" width={canvasWidth} height={canvasHeight} />
