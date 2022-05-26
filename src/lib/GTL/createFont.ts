import type { Syntax, GlyphInput } from '../types';
import {
	structureToArray,
	type Cell,
	createBox,
	getRule,
	drawPath,
	getGlyphWidth
} from './drawGlyph';
import {
	getAbsoluteSVGPath,
	arrayToDirectives,
	editPathFromDirectives
} from './paperToOpentype';
import paper from 'paper';
import opentype from 'opentype.js';
import { UNICODE } from './unicode';

//

export function generateGlyph(
	glyph: GlyphInput,
	syntax: Syntax,
	baseSize = 100,
	widthRatio = 1,
	baseline = 1
): opentype.Glyph {
	/**
	 * Paperjs part
	 */

	// Initializing paperjs
	const size = new paper.Size(baseSize, baseSize);
	paper.setup(size);

	// Listing all the paths
	const paths: Array<paper.Path> = [];

	// Converting structure to array
	const cells: Array<Cell> = structureToArray(glyph.structure);

	// Iterating over cells (saving all the paths)
	for (let c of cells) {
		const box = createBox(c, baseSize, widthRatio);
		const rule = getRule(syntax, c.symbol);
		const boxPaths = drawPath(box, rule);

		// Saving path
		paths.push(...boxPaths);
	}

	/**
	 * Opentype.js part
	 */

	// Initializing path
	const oPath = new opentype.Path();

	// Converting paths to opentype
	for (let p of paths) {
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
}

//

export function generateFont(
	syntax: Syntax,
	glyphs: Array<GlyphInput>,
	metrics: FontMetrics
): opentype.Font {
	// Qui bisogna aggiungere la width presa dalla sintassi
	const UPM = 1000;
	const BASESQUARE = Math.round(UPM / metrics.height);

	// Listing all the glyphs
	const opentypeGlyphs = [];

	// Adding Notdef – It's required
	const notdefGlyph = new opentype.Glyph({
		name: '.notdef',
		unicode: 0,
		advanceWidth: BASESQUARE * 4,
		path: new opentype.Path()
	});
	opentypeGlyphs.push(notdefGlyph);

	for (let g of glyphs) {
		opentypeGlyphs.push(
			generateGlyph(g, syntax, BASESQUARE, 1, metrics.baseline)
		);
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
