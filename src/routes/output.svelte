<script lang="ts">
	import { glyphs, syntaxes } from '$lib/stores';

	import opentype from 'opentype.js';
	import paper from 'paper';
	import { onMount } from 'svelte';
	import {
		getAbsoluteSVGPath,
		editPathFromDirectives,
		arrayToDirectives
	} from '$lib/GTL/paperToOpentype';
	import { unicode } from '$lib/unicode';

	import {
		structureToArray,
		drawPath,
		getRule,
		createBox,
		getGlyphWidth
	} from '$lib/GTL/drawGlyph';

	const canvas_h = 1000;
	const canvas_w = 1000;

	const baseSquare = 100;

	//

	// function doStuff(node: HTMLCanvasElement) {
	// 	const ctx = node.getContext('2d');

	// 	if (ctx) {
	// 		aGlyph.draw(ctx, 0, canvas_h, 200);
	// 		aGlyph.drawMetrics(ctx, 0, canvas_h, 200);
	// 	}
	// }

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
				// Listing all the paths
				const paths: Array<paper.PathItem> = [];

				const cells = structureToArray(g.structure);
				const baseSize = 100;
				const widthRatio = 1;
				for (let c of cells) {
					const box = createBox(c, baseSize, widthRatio);
					const rule = getRule(syntax, c.symbol);
					const path = drawPath(box, rule);

					path.fillColor = new paper.Color('black');

					// Saving path
					paths.push(path);
				}

				// Drawing opentype paths
				const oPath = new opentype.Path();

				for (let p of paths) {
					const svgpath = getAbsoluteSVGPath(p);
					const directives = arrayToDirectives(svgpath);
					editPathFromDirectives(oPath, directives, -100);
				}

				// const path = paperToOpentype(joinedPath);
				const name = g.name;
				const advanceWidth = getGlyphWidth(g.structure, baseSize * widthRatio);

				glyphs_.push(
					new opentype.Glyph({
						name,
						unicode: parseInt(unicode[name], 16),
						advanceWidth,
						path: oPath
					})
				);
			}

			const font = new opentype.Font({
				familyName: 'GTL',
				styleName: syntax.name,
				unitsPerEm: 600,
				ascender: 600,
				descender: 0,
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
