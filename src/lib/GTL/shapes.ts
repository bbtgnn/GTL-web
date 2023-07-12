import paper from 'paper';
import { orientations } from '../types';
import { Orientation, type BaseProps } from '../types';
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
	path: paper.PathItem,
	data: TransformData,
	center = new paper.Point(0, 0)
) {
	path.scale(data.scale_x, data.scale_y, center);
	path.rotate(data.rotation, center);
}

export function transform(path: paper.Path, props: BaseProps, center = new paper.Point(0, 0)) {
	const scale_x = calcNumberProp(props.scale_x);
	const scale_y = calcNumberProp(props.scale_y);
	const rotation = calcNumberProp(props.rotation);

	path.scale(scale_x, scale_y, center);
	path.rotate(rotation, center);
}

/* Shape drawing */

export type BaseShapeProps = Record<string, unknown>;

export type Shape<P = BaseShapeProps> = (
	box: paper.Rectangle,
	props: P
) => Promise<Array<paper.PathItem>>;

//

export const blank: Shape = async () => {
	return [];
};

export const rectangle: Shape = async (box) => {
	return [new paper.Path.Rectangle(box)];
};

//

export type SquaringProp = {
	squaring: number;
};

export type NegativeProp = {
	negative: boolean;
};

export type OrientationProp = {
	orientation: Orientation;
};

export type QuarterProps = Partial<SquaringProp & NegativeProp & OrientationProp>;

export const quarter: Shape<QuarterProps> = async (box, props) => {
	const { negative = false, squaring = 0.56, orientation = Orientation.NE } = props;
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

	return [path];
};

//

export type EllipseProps = Partial<SquaringProp & NegativeProp>;

export const ellipse: Shape<EllipseProps> = async (box, props) => {
	const { squaring = 0.56, negative = false } = props;

	// Base information
	const size = new paper.Size(box.width / 2, box.height / 2);
	const basePoints: Record<Orientation, paper.Point> = {
		SE: box.topCenter,
		SW: box.topLeft,
		NE: box.center,
		NW: box.leftCenter
	};

	// Storing all the quarters
	const paths: Array<paper.PathItem> = [];

	// Looping over orientations
	for (const orientation of orientations) {
		const quarterBox = new paper.Rectangle(basePoints[orientation], size);
		const q = await quarter(quarterBox, { squaring, negative, orientation });
		paths.push(...q);
	}

	return paths;
};

//

export type SVGProps = {
	url: string;
	negative: boolean;
};

export const svg: Shape<SVGProps> = async (box, props) => {
	const path = await new Promise<paper.Item>((resolve) => {
		paper.project.importSVG(props.url, {
			expandShapes: true, // <- Guarantee that children are paths
			onLoad: (item: paper.Item) => {
				resolve(item);
			}
		});
	});
	path.fitBounds(box);
	path.scale(1, -1, box.center);

	const pathItems = SVGItemToPathItems(path);
	console.log(props);

	if (!props.negative) return pathItems;
	else {
		let rect = new paper.Path.Rectangle(box) as paper.PathItem;
		for (const items of pathItems) {
			rect = rect.subtract(items);
		}
		return [rect];
	}
};

enum PaperJSClass {
	Group = 'Group',
	Layer = 'Layer',
	Item = 'Item',
	Path = 'Path',
	CompoundPath = 'CompoundPath',
	PathItem = 'PathItem',
	Shape = 'Shape',
	Raster = 'Raster',
	SymbolItem = 'SymbolItem',
	PointText = 'PointText'
}

function SVGItemToPathItems(item: paper.Item): Array<paper.PathItem> {
	const pathItems: Array<paper.PathItem> = [];
	if (item.clipMask) 'pass';
	else if (item.className == PaperJSClass.Path || item.className == PaperJSClass.CompoundPath) {
		pathItems.push(item as paper.PathItem);
	} else if (item.className == PaperJSClass.Group || item.className == PaperJSClass.Layer) {
		for (const child of item.children) {
			pathItems.push(...SVGItemToPathItems(child));
		}
	}
	return pathItems;
}
