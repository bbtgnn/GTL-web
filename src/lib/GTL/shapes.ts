import paper from 'paper';
import { orientations } from '../types';
import type { BaseProps, Orientation } from '../types';
import { calcNumberProp } from '../types';

//

export type TransformData = {
	scale_x: number;
	scale_y: number;
	rotation: number;
};

export function calcTransform(props: BaseProps): TransformData {
	return {
		scale_x: calcNumberProp(props.scale_x),
		scale_y: calcNumberProp(props.scale_y),
		rotation: calcNumberProp(props.rotation)
	};
}

export function applyTransform(
	path: paper.Path,
	data: TransformData,
	center = new paper.Point(0, 0)
) {
	path.scale(data.scale_x, data.scale_y, center);
	path.rotate(data.rotation, center);
}

export function transform(
	path: paper.Path,
	props: BaseProps,
	center = new paper.Point(0, 0)
) {
	const scale_x = calcNumberProp(props.scale_x);
	const scale_y = calcNumberProp(props.scale_y);
	const rotation = calcNumberProp(props.rotation);

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
	squaring = 0.56,
	negative = false,
	orientation: Orientation = 'SE'
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
	const A = box.topLeft;
	const AH = A.add(M.subtract(A).multiply(squaring));
	const B = box.bottomRight;
	const BH = B.add(M.subtract(B).multiply(squaring));

	// Drawing path
	const path = new paper.Path();
	path.moveTo(A);
	path.cubicCurveTo(AH, BH, B);
	path.lineTo(C);
	path.closePath();

	// // Transforming according to orientation
	if (orientation == 'NE' || orientation == 'NW') {
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
	squaring = 0.56,
	negative = false
): Array<paper.Path> {
	// Base information
	const size = new paper.Size(box.width / 2, box.height / 2);
	const basePoints: Record<Orientation, paper.Point> = {
		SE: box.topCenter,
		SW: box.topLeft,
		NE: box.center,
		NW: box.leftCenter
	};

	// Storing all the quarters
	const paths: Array<paper.Path> = [];

	// Looping over orientations
	for (const o of orientations) {
		const quarterBox = new paper.Rectangle(basePoints[o], size);
		paths.push(quarter(quarterBox, squaring, negative, o));
	}

	return paths;
}
