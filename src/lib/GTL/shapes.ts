import paper from 'paper';
import { orientations } from '../types';
import type { BaseProps, Orientation } from '../types';
import { calcNumberProp } from '../types';

import lettersJSON from '$lib/letters.json';
import { randomChoice } from '../types';

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

export async function rectangle(box: paper.Rectangle): Promise<paper.Path> {
	return new paper.Path.Rectangle(box);
}

//

export async function quarter(
	box: paper.Rectangle,
	squaring = 0.56,
	negative = false,
	orientation: Orientation = 'SE'
): Promise<paper.Path> {
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

export async function ellipse(
	box: paper.Rectangle,
	squaring = 0.56,
	negative = false
): Promise<Array<paper.Path>> {
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
		paths.push(await quarter(quarterBox, squaring, negative, o));
	}

	return paths;
}

//

function itemToPaths(item: paper.Item): Array<paper.Path> {
	const paths: Array<paper.Path> = [];
	if (item.className == 'Path') {
		const p = new paper.Path((item as paper.Path).segments);
		p.closed = true;
		paths.push(p);
	} else if (item.className == 'Shape') {
		const s = item as paper.Shape;
		if (!s.clipMask) {
			const p = new paper.Path((item as paper.Shape).toPath().segments);
			p.closed = true;
			paths.push(p);
		}
	} else if (item.className == 'Group' || item.className == 'CompoundPath') {
		for (const child of item.children) {
			paths.push(...itemToPaths(child));
		}
	}
	return paths;
}

export async function svg(
	box: paper.Rectangle,
	svgPath: string
): Promise<Array<paper.Path>> {
	const path = await new Promise<paper.Item>((resolve) => {
		paper.project.importSVG(svgPath, {
			expandShapes: true, // <- Guarantee that children are paths
			onLoad: (item: paper.Item) => {
				resolve(item);
			}
		});
	});

	console.log(path);

	path.scale(1, -1, box.center);
	path.fitBounds(box);

	const paths = itemToPaths(path);

	path.remove();

	return paths;
}

//

export async function alfabetiAfricani(
	box: paper.Rectangle,
	alphabets: Array<string>
): Promise<Array<paper.Path>> {
	const alphabet = randomChoice<string>(alphabets);
	const letters = (lettersJSON as Record<string, string[]>)[alphabet];
	const letter = randomChoice<string>(letters);
	return svg(box, letter);
}
