import {
	ShapeKind,
	calcOrientationProp,
	calcNumberProp,
	calcBooleanProp
} from '../types';
import type { Rule, Syntax } from '../types';
import { rectangle, ellipse, quarter } from './shapes';

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
	for (let [i, row] of rows.entries()) {
		// Getting columns
		const chars = row.split('');

		// Iterating over columns
		for (let [j, c] of chars.entries()) {
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

export function drawPath(box: paper.Rectangle, rule: Rule): paper.PathItem {
	let path: paper.PathItem;

	if (rule.shape.kind == ShapeKind.Rectangle) {
		path = rectangle(box);
	}
	//
	else if (rule.shape.kind == ShapeKind.Ellipse) {
		path = ellipse(
			box,
			calcNumberProp(rule.shape.props.squaring),
			calcBooleanProp(rule.shape.props.negative)
		);
	}
	//
	else if (rule.shape.kind == ShapeKind.Quarter) {
		path = quarter(
			box,
			calcNumberProp(rule.shape.props.squaring),
			calcBooleanProp(rule.shape.props.negative),
			calcOrientationProp(rule.shape.props.orientation)
		);
	}
	//
	else if (rule.shape.kind == ShapeKind.Void) {
		path = new paper.Path();
	}
	//
	else {
		throw new Error('unknownShape');
	}

	return path;
}

//

export function getRule(syntax: Syntax, symbol: string): Rule {
	for (let rule of syntax.rules) {
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
