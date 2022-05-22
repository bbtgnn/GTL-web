<script lang="ts">
	import { glyphs, syntaxes } from '$lib/stores';

	import opentype from 'opentype.js';
	import {
		rectangle,
		getAbsoluteSVGPath,
		quarter,
		ellipse,
		paperToOpentype
	} from '$lib/GTL/shapes';
	import paper from 'paper';
	import { onMount } from 'svelte';
	import { type Shape, type Syntax, type Rule, ShapeKind } from '$lib/types';
	import {
		calcBooleanProp,
		calcNumberProp,
		calcOrientationProp
	} from '$lib/types';

	const canvas_h = 1000;
	const canvas_w = 1000;

	const baseSquare = 100;

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

	// function doStuff(node: HTMLCanvasElement) {
	// 	const ctx = node.getContext('2d');

	// 	if (ctx) {
	// 		aGlyph.draw(ctx, 0, canvas_h, 200);
	// 		aGlyph.drawMetrics(ctx, 0, canvas_h, 200);
	// 	}
	// }

	function getRule(s: Syntax, c: string): Rule {
		for (let r of s.rules) {
			if (r.symbol == c) return r;
		}
		throw new Error('missingSymbol');
	}

	onMount(() => {
		/**
		 * Iterating over syntaxes
		 */

		for (let syntax of $syntaxes) {
			// Setup paper.js
			paper.setup(syntax.name);
			const size = new paper.Size(baseSquare, baseSquare); // Qui bisogna aggiungere la width presa dalla sintassi

			/**
			 * Iterating over glyphs
			 */

			const glyphs_: Array<opentype.Glyph> = [];

			// Notdef is required
			const notdefGlyph = new opentype.Glyph({
				name: '.notdef',
				unicode: 0,
				advanceWidth: 600,
				path: new opentype.Path()
			});
			glyphs_.push(notdefGlyph);

			//

			for (let g of $glyphs) {
				// Getting rows
				const rows = g.structure.split('\n');

				// Listing all the paths
				const paths: Array<paper.PathItem> = [];

				// Iterating over rows
				for (let [i, r] of rows.entries()) {
					// Getting base geometry
					const y = baseSquare * i;
					// Getting columns
					const chars = r.split('');

					// Iterating over columns
					for (let [j, c] of chars.entries()) {
						// Getting base geometry
						const x = baseSquare * j; // Qui bisogna aggiungere la width presa dalla sintassi
						const p = new paper.Point(x, y);
						const box = new paper.Rectangle(p, size);

						// Qui la sintassi sceglie la funzione
						const rule = getRule(syntax, c);
						let path: paper.PathItem;
						if (rule.shape.kind == ShapeKind.Rectangle) {
							path = rectangle(box);
						} else if (rule.shape.kind == ShapeKind.Ellipse) {
							path = ellipse(
								box,
								calcNumberProp(rule.shape.props.squaring),
								calcBooleanProp(rule.shape.props.negative)
							);
						} else if (rule.shape.kind == ShapeKind.Quarter) {
							path = quarter(
								box,
								calcNumberProp(rule.shape.props.squaring),
								calcBooleanProp(rule.shape.props.negative),
								calcOrientationProp(rule.shape.props.orientation)
							);
						} else if (rule.shape.kind == ShapeKind.Void) {
							path = new paper.Path();
						} else {
							throw new Error('unknownShape');
						}

						// Applying transformations
						if (rule.shape.kind != ShapeKind.Void) {
							// Scales
							const scale_x = calcNumberProp(rule.shape.props.scale_x);
							const scale_y = calcNumberProp(rule.shape.props.scale_y);
							path.scale(scale_x, scale_y, box.center);

							// Rotation
							path.rotate(
								calcNumberProp(rule.shape.props.rotation),
								box.center
							);
						}

						paths.push(path);
					}
				}

				// Joining all the paths
				const joinedPath = paths.reduce((prev, curr) => prev.unite(curr));
				joinedPath.fillColor = new paper.Color('red');

				const path = paperToOpentype(joinedPath);
				const name = g.name;
				const advanceWidth = rows[0].length * baseSquare;

				glyphs_.push(
					new opentype.Glyph({
						name,
						unicode: 65,
						advanceWidth,
						path
					})
				);
			}

			const font = new opentype.Font({
				familyName: 'GTL',
				styleName: syntax.name,
				unitsPerEm: 1000,
				ascender: 800,
				descender: -200,
				glyphs: glyphs_
			});

			font.download();
		}
	});
</script>

<!--  -->

<div class="p-4">
	{#each $syntaxes as syntax}
		<canvas
			class="border-2 border-slate-400"
			width={canvas_w}
			height={canvas_h}
			id={syntax.name}
		/>
	{/each}

	<!-- <canvas
		class="border-2 border-slate-400"
		use:usePaper
		width={canvas_w}
		height={canvas_h}
		id="A"
	/> -->
</div>
