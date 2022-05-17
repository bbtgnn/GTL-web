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

//

export const PathLetters = ['C', 'M', 'Z', 'L'] as const;
export type PathLetter = typeof PathLetters[number];

export function getAbsoluteSVGPath(path: paper.Path): string {
	// Getting SVG path
	const svg = path.exportSVG({ asString: false }) as SVGElement;
	// Getting path attribute
	const d = svg.getAttribute('d');
	// Making path in absolute coordinates
	const absPath: string = new SVGPathCommander(d).toAbsolute();

	return absPath;
}

// export function pathToDirectives(path: paper.Path): opentype.Path {
// 	const sequence = absPath
// 		.replace(/C/g, ' C ')
// 		.replace(/M/g, ' M ')
// 		.replace(/Z/g, ' Z ')
// 		.replace(/L/g, ' L ')
// 		.split(' ')
// 		.filter((s) => s);

// 	const sequences: Array<Array<string>> = [];
// 	let tempArr: Array<string> = [];
// 	for (let s of sequence) {
// 		if (['C', 'M', 'Z', 'L'].includes(s)) {
// 			if (tempArr.length) {
// 				sequences.push(tempArr);
// 			}
// 			tempArr = [];
// 		}
// 		tempArr.push(s);
// 	}
// 	console.log(sequences);

// 	const instr: Array<
// 		| { type: 'Z' }
// 		| { type: 'M'; x: number; y: number }
// 		| { type: 'L'; x: number; y: number }
// 		| {
// 				type: 'C';
// 				x1: number;
// 				y1: number;
// 				x2: number;
// 				y2: number;
// 				x: number;
// 				y: number;
// 		  }
// 	> = [];

// 	for (let item of sequences) {
// 		if (item[0] == 'Z') {
// 			instr.push({ type: 'Z' });
// 		}
// 		if (item[0] == 'L' || item[0] == 'M') {
// 			instr.push({
// 				type: item[0],
// 				x: parseFloat(item[1]),
// 				y: parseFloat(item[2])
// 			});
// 		}
// 		if (item[0] == 'C') {
// 			instr.push({
// 				type: item[0],
// 				x1: parseFloat(item[1]),
// 				y1: parseFloat(item[2]),
// 				x2: parseFloat(item[3]),
// 				y2: parseFloat(item[4]),
// 				x: parseFloat(item[5]),
// 				y: parseFloat(item[6])
// 			});
// 		}
// 	}
// 	console.log(instr);

// 	const p = new opentype.Path();
// 	for (let i of instr) {
// 		if (i.type == 'M') {
// 			p.moveTo(i.x, i.y);
// 		} else if (i.type == 'L') {
// 			p.lineTo(i.x, i.y);
// 		} else if (i.type == 'Z') {
// 			p.close();
// 		} else if (i.type == 'C') {
// 			p.bezierCurveTo(i.x1, i.y1, i.x2, i.y2, i.x, i.y);
// 		}
// 	}
// 	return p;
// }
