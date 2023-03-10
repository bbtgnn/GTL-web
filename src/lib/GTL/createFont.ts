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
import {
	getAbsoluteSVGPath,
	arrayToDirectives,
	editPathFromDirectives
} from './paperToOpentype';
import paper from 'paper';
import opentype from 'opentype.js';
import { UNICODE } from './unicode';

//

export async function generateGlyph(
	glyph: GlyphInput,
	syntax: Syntax,
	metrics: FontMetrics,
	baseSize = 100,
	widthRatio = 1
): Promise<opentype.Glyph> {
	/**
	 * Paperjs part
	 */

	// Initializing paperjs
	const size = new paper.Size(baseSize, baseSize);
	paper.setup(size);

	// Listing all the paths
	const paths: Array<paper.Item> = [];

	// Converting structure to array
	const cells: Array<Cell> = structureToArray(glyph.structure);

	// Iterating over cells (saving all the paths)
	for (const c of cells) {
		// Getting rule
		const rule = getRule(syntax, c.symbol);

		// If rule is not void
		if (rule.shape.kind != ShapeKind.Void) {
			// Getting box and creating paths
			const box = createBox(c, baseSize, widthRatio);

			// Calculating sub-boxes
			const w = box.width / metrics.boxCols;
			const h = box.height / metrics.boxRows;
			const x = (col: number) => box.x + col * w;
			const y = (row: number) => box.y + row * h;

			for (let row = 0; row < metrics.boxRows; row++) {
				for (let col = 0; col < metrics.boxCols; col++) {
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
		editPathFromDirectives(oPath, directives, -baseSize * metrics.baseline);
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

export interface FontMetrics extends Record<string, number> {
	baseline: number;
	height: number;
	UPM: number;
	boxRows: number;
	boxCols: number;
}

//

export async function generateFont(
	syntax: Syntax,
	glyphs: Array<GlyphInput>,
	metrics: FontMetrics
): Promise<opentype.Font> {
	// Qui bisogna aggiungere la width presa dalla sintassi
	const UPM = metrics.UPM;
	const BASESQUARE = Math.round(UPM / metrics.height);

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
		opentypeGlyphs.push(await generateGlyph(g, syntax, metrics, BASESQUARE, 1));
	}

	// Creating font
	return new opentype.Font({
		familyName: 'GTL',
		styleName: syntax.name,
		unitsPerEm: UPM,
		ascender: BASESQUARE * (metrics.height - metrics.baseline),
		descender: -BASESQUARE * metrics.baseline,
		glyphs: opentypeGlyphs
	});
}
