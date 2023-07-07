import type { Syntax, GlyphInput } from '../types';
import { ShapeKind } from '../types';
import {
	structureToArray,
	type Cell,
	createBox,
	getRule,
	drawPath,
	getGlyphWidth
} from './drawGlyph';
import { calcTransform, applyTransform } from './shapes';
import { getAbsoluteSVGPath, arrayToDirectives, editPathFromDirectives } from './paperToOpentype';
import paper from 'paper';
import opentype from 'opentype.js';
import { UNICODE } from './unicode';

//

export async function generateGlyph(
	glyph: GlyphInput,
	syntax: Syntax,
	baseSize = 100,
	widthRatio = 1,
	baseline = 1
): Promise<opentype.Glyph> {
	/**
	 * Paperjs part
	 */

	// Initializing paperjs
	const size = new paper.Size(baseSize, baseSize);
	paper.setup(size);

	// Listing all the paths
	const paths: Array<paper.PathItem> = [];

	// Converting structure to array
	const cells: Array<Cell> = structureToArray(glyph.structure);

	// Iterating over cells (saving all the paths)
	for (const c of cells) {
		// Getting rule
		const rule = getRule(syntax, c.symbol);

		// If rule is not void
		if (rule.shape.kind != ShapeKind.Void) {
			const box = createBox(c, baseSize, widthRatio);

			// Calculating sub-boxes
			const w = box.width / syntax.grid.columns;
			const h = box.height / syntax.grid.rows;
			const x = (col: number) => box.x + col * w;
			const y = (row: number) => box.y + row * h;

			for (let row = 0; row < syntax.grid.rows; row++) {
				for (let col = 0; col < syntax.grid.columns; col++) {
					const subBox = new paper.Rectangle({
						x: x(col),
						y: y(row),
						width: w,
						height: h
					});
					const subPaths = await drawPath(subBox, rule);
					const transform = calcTransform(rule.shape.props);
					for (const p of subPaths) {
						applyTransform(p, transform, box.center);
					}
					// // Reorienting paths
					// for (const p of boxPaths) {
					// 	p.reorient(true, true);
					// }
					paths.push(...subPaths);
				}
			}
		}
	}

	/**
	 * Opentype.js part
	 */

	// Initializing path
	const oPath = new opentype.Path();

	// Converting paths to opentype
	for (const p of paths) {
		const svgpath = getAbsoluteSVGPath(p);
		const directives = arrayToDirectives(svgpath);
		editPathFromDirectives(oPath, directives, -baseSize * baseline);
	}

	// Adding glyph metadata
	const name = glyph.name;
	const advanceWidth = getGlyphWidth(glyph.structure, baseSize * widthRatio);

	// Clearing paperjs
	paper.project.clear();

	return new opentype.Glyph({
		name,
		unicode: parseInt(UNICODE[name], 16),
		advanceWidth,
		path: oPath
	});
}

//

export interface FontMetrics {
	baseline: number;
	height: number;
	UPM: number;
}

export type FontMetricsKeys = keyof FontMetrics;

//

export async function generateFont(
	syntax: Syntax,
	glyphs: Array<GlyphInput>,
	metrics: FontMetrics
): Promise<opentype.Font> {
	// Qui bisogna aggiungere la width presa dalla sintassi
	const BASESQUARE = Math.round(metrics.UPM / metrics.height);

	// Listing all the glyphs
	const opentypeGlyphs = [];

	// Adding Notdef - is required
	const notdefGlyph = new opentype.Glyph({
		name: '.notdef',
		unicode: 0,
		advanceWidth: BASESQUARE * 4,
		path: new opentype.Path()
	});
	opentypeGlyphs.push(notdefGlyph);

	for (const g of glyphs) {
		opentypeGlyphs.push(await generateGlyph(g, syntax, BASESQUARE, 1, metrics.baseline));
	}

	// Creating font
	return new opentype.Font({
		familyName: 'GTL',
		styleName: syntax.name,
		unitsPerEm: metrics.UPM,
		ascender: BASESQUARE * (metrics.height - metrics.baseline),
		descender: -BASESQUARE * metrics.baseline,
		glyphs: opentypeGlyphs
	});
}
