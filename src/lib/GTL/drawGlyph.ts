import {
	ShapeKind,
	calcOrientationProp,
	calcNumberProp,
	calcBooleanProp,
	calcStringProp
} from '../types';
import type { Rule, Syntax } from '../types';
import { rectangle, ellipse, quarter, svg, alfabetiAfricani } from './shapes';

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

export async function drawPath(
	box: paper.Rectangle,
	rule: Rule
): Promise<Array<paper.Item>> {
	const paths: Array<paper.Item> = [];

	if (rule.shape.kind == ShapeKind.Rectangle) {
		paths.push(await rectangle(box));
	}
	//
	else if (rule.shape.kind == ShapeKind.Ellipse) {
		paths.push(
			...(await ellipse(
				box,
				calcNumberProp(rule.shape.props.squaring),
				calcBooleanProp(rule.shape.props.negative)
			))
		);
	}
	//
	else if (rule.shape.kind == ShapeKind.Quarter) {
		paths.push(
			await quarter(
				box,
				calcNumberProp(rule.shape.props.squaring),
				calcBooleanProp(rule.shape.props.negative),
				calcOrientationProp(rule.shape.props.orientation)
			)
		);
	}
	//
	else if (rule.shape.kind == ShapeKind.Void) {
		paths.push(new paper.Path());
	}
	//
	else if (rule.shape.kind == ShapeKind.SVG) {
		paths.push(
			...(await svg(box, `/${calcStringProp(rule.shape.props.path)}`))
		);
	}
	//
	else if (rule.shape.kind == ShapeKind.AlfabetiAfricani) {
		paths.push(
			...(await alfabetiAfricani(
				box,
				rule.shape.props.alphabets,
				calcBooleanProp(rule.shape.props.negative)
			))
		);
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

export function createBox(
	cell: Cell,
	baseSize: number,
	widthRatio: number
): paper.Rectangle {
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
