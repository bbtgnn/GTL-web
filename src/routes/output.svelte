<script lang="ts">
	import { glyphs, syntaxes } from '$lib/stores';

	import opentype from 'opentype.js';
	import {
		rectangle,
		getAbsoluteSVGPath,
		quarter,
		ellipse
	} from '$lib/GTL/shapes';
	import paper from 'paper';
	import { onMount } from 'svelte';

	const canvas_h = 200;
	const canvas_w = 200;

	// onMount(() => {
	// 	// Paperjs setup
	// 	const size = new paper.Size(100, 100);
	// 	paper.setup(size);

	// 	const point = new paper.Point(0, 100);
	// 	const box = new paper.Rectangle(point, size);

	// 	// Creating path
	// 	const path = rectangle(box);
	// 	const res = getAbsoluteSVGPath(path);
	// 	console.log(res);
	// });

	// Create the bézier paths for each of the glyphs.
	// Note that the .notdef glyph is required.
	// const notdefGlyph = new opentype.Glyph({
	// 	name: '.notdef',
	// 	unicode: 0,
	// 	advanceWidth: 650,
	// 	path: new opentype.Path()
	// });

	// const aPath = new opentype.Path();
	// aPath.moveTo(100, 0);
	// aPath.lineTo(100, 700);
	// aPath.lineTo(200, 700);
	// aPath.lineTo(200, 0);
	// aPath.close();

	// more drawing instructions...
	// const aGlyph = new opentype.Glyph({
	// 	name: 'A',
	// 	unicode: 65,
	// 	advanceWidth: 650,
	// 	path: new opentype.Path()
	// });

	// const glyphs_ = [notdefGlyph, aGlyph];
	// const font = new opentype.Font({
	// 	familyName: 'OpenTypeSans',
	// 	styleName: 'Medium',
	// 	unitsPerEm: 1000,
	// 	ascender: 800,
	// 	descender: -200,
	// 	glyphs: glyphs_
	// });

	// function doStuff(node: HTMLCanvasElement) {
	// 	const ctx = node.getContext('2d');

	// 	if (ctx) {
	// 		aGlyph.draw(ctx, 0, canvas_h, 200);
	// 		aGlyph.drawMetrics(ctx, 0, canvas_h, 200);
	// 	}
	// }

	onMount(() => {
		// Paperjs setup
		paper.setup('A');

		const size = new paper.Size(50, 50);
		const point = new paper.Point(100, 100);
		const box = new paper.Rectangle(point, size);

		// Creating path
		// const path = rectangle(box);
		const path = ellipse(box, 0, true);
		path.fillColor = new paper.Color('black');
	});

	// font.download();
</script>

<!--  -->

<div class="p-4">
	<canvas
		class="border-2 border-slate-400"
		width={canvas_w}
		height={canvas_h}
		id="A"
	/>
	<!-- <canvas
		class="border-2 border-slate-400"
		use:usePaper
		width={canvas_w}
		height={canvas_h}
		id="A"
	/> -->
</div>
