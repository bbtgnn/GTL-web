import {
	ShapeKind,
	calcOrientationProp,
	calcNumberProp,
	calcBooleanProp,
	calcStringProp
} from '../types';
import type { Rule, Syntax } from '../types';
import {
	rectangle,
	ellipse,
	quarter,
	svg,
	type EllipseProps,
	type QuarterProps,
	type SVGProps
} from './shapes';

import paper from 'paper';

//

export interface Cell {
	point: {
		x: number;
		y: number;
	};
	symbol: string;
}

//

export function splitStructure(s: string): Array<string> {
	return s.split(/\r?\n/);
}

//

export function structureToArray(s: string): Array<Cell> {
	// Here will be stored the rows
	const array: Array<Cell> = [];

	// Getting all the rows
	const rows = splitStructure(s);

	// Reversing the array, so that the last row has index 0
	// (Starting from the bottom)
	rows.reverse();

	// Iterating over rows
	for (const [i, row] of rows.entries()) {
		// Getting columns
		const chars = row.split('');

		// Iterating over columns
		for (const [j, c] of chars.entries()) {
			// Adding to array
			array.push({
				symbol: c,
				point: {
					x: j,
					y: i
				}
			});
		}
	}

	return array;
}

//

export async function drawPath(box: paper.Rectangle, rule: Rule): Promise<Array<paper.PathItem>> {
	const paths: Array<paper.PathItem> = [];

	if (rule.shape.kind == ShapeKind.Rectangle) {
		paths.push(...(await rectangle(box, {})));
	}
	//
	else if (rule.shape.kind == ShapeKind.Ellipse) {
		const props: EllipseProps = {
			squaring: calcNumberProp(rule.shape.props.squaring),
			negative: calcBooleanProp(rule.shape.props.negative)
		};
		paths.push(...(await ellipse(box, props)));
	}
	//
	else if (rule.shape.kind == ShapeKind.Quarter) {
		const props: QuarterProps = {
			squaring: calcNumberProp(rule.shape.props.squaring),
			negative: calcBooleanProp(rule.shape.props.negative),
			orientation: calcOrientationProp(rule.shape.props.orientation)
		};
		paths.push(...(await quarter(box, props)));
	}
	//
	else if (rule.shape.kind == ShapeKind.Void) {
		('pass');
	}
	//
	else if (rule.shape.kind == ShapeKind.SVG) {
		const props: SVGProps = {
			url: calcStringProp(rule.shape.props.path),
			negative: calcBooleanProp(rule.shape.props.negative)
		};
		paths.push(...(await svg(box, props)));
	}
	//
	else {
		throw new Error('unknownShape');
	}

	return paths;
}

//

export function getRule(syntax: Syntax, symbol: string): Rule {
	for (const rule of syntax.rules) {
		if (rule.symbol == symbol) return rule;
	}
	throw new Error('missingSymbol');
}

//

export function createBox(cell: Cell, baseSize: number, widthRatio: number): paper.Rectangle {
	// Getting rectangle dimension
	const w = baseSize * widthRatio;
	const h = baseSize;
	const x = w * cell.point.x;
	const y = h * cell.point.y;

	// Creating point and size
	const p = new paper.Point(x, y);
	const s = new paper.Size(w, h);

	return new paper.Rectangle(p, s);
}

//

export function getGlyphWidth(structure: string, boxWidth: number): number {
	const rows = splitStructure(structure);
	const length = rows[0].length;
	return boxWidth * length;
}
