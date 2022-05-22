import opentype from 'opentype.js';
import paper from 'paper';
import SVGPathCommander from 'svg-path-commander';
import _ from 'lodash';
import { orientations } from '../types';
import type { BaseProps, Orientation, QuarterProps } from '../types';
import { calcNumberProp, calcBooleanProp } from '../types';

//

export function transform(
	path: paper.Path,
	props: BaseProps,
	center = new paper.Point(0, 0)
) {
	let scale_x = calcNumberProp(props.scale_x);
	let scale_y = calcNumberProp(props.scale_y);
	let rotation = calcNumberProp(props.rotation);

	path.scale(scale_x, scale_y, center);
	path.rotate(rotation, center);
}

//

export function rectangle(box: paper.Rectangle): paper.Path {
	return new paper.Path.Rectangle(box);
}

//

export function quarter(
	box: paper.Rectangle,
	squaring: number = 0.56,
	negative: boolean = false,
	orientation: Orientation = 'NE'
): paper.Path {
	// Handles max point
	const M: paper.Point = box.topRight;

	// Corner point
	let C: paper.Point;
	if (negative) {
		C = box.topRight;
	} else {
		C = box.bottomLeft;
	}

	// Points and handles
	let A = box.topLeft;
	let AH = A.add(M.subtract(A).multiply(squaring));
	let B = box.bottomRight;
	let BH = B.add(M.subtract(B).multiply(squaring));

	// Drawing path
	const path = new paper.Path();
	path.moveTo(A);
	path.cubicCurveTo(AH, BH, B);
	path.lineTo(C);
	path.closePath();

	// Transforming according to orientation
	if (orientation == 'SE' || orientation == 'SW') {
		path.scale(1, -1, box.center);
	}
	if (orientation == 'NW' || orientation == 'SW') {
		path.scale(-1, 1, box.center);
	}

	return path;
}

//

export function ellipse(
	box: paper.Rectangle,
	squaring: number = 0.56,
	negative: boolean = false
): paper.PathItem {
	// Base information
	const size = new paper.Size(box.width / 2, box.height / 2);
	const basePoints: Record<Orientation, paper.Point> = {
		NE: box.topCenter,
		NW: box.topLeft,
		SE: box.center,
		SW: box.leftCenter
	};

	// Storing all the quarters
	const paths: Array<paper.Path> = [];

	// Looping over orientations
	for (let o of orientations) {
		const quarterBox = new paper.Rectangle(basePoints[o], size);
		paths.push(quarter(quarterBox, squaring, negative, o));
	}

	// Creating final path
	return paths[0].unite(paths[1]).unite(paths[2]).unite(paths[3]);
}
