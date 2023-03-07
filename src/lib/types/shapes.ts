import type {
	BaseProps,
	BooleanProp,
	CurveProps,
	OrientationProp,
	StringProp
} from './props';

/**
 * Shapes
 */

export enum ShapeKind {
	Void = 'void',
	Rectangle = 'rectangle',
	Ellipse = 'ellipse',
	Quarter = 'quarter',
	SVG = 'svg',
	AlfabetiAfricani = 'alfabetiAfricani'
}

export interface ShapeTemplate<K, P> {
	kind: K;
	props: P;
}

// Void

export type VoidProps = Record<string, unknown>;
export type VoidShape = ShapeTemplate<ShapeKind.Void, VoidProps>;

// Rectangle

export type RectangleProps = BaseProps;
export type RectangleShape = ShapeTemplate<ShapeKind.Rectangle, RectangleProps>;

// Ellipse

export type EllipseProps = BaseProps & CurveProps;
export type EllipseShape = ShapeTemplate<ShapeKind.Ellipse, EllipseProps>;

// Quarter

export type QuarterProps = BaseProps &
	CurveProps & {
		orientation: OrientationProp;
	};

export type QuarterShape = ShapeTemplate<ShapeKind.Quarter, QuarterProps>;

// SVG

export type SVGProps = BaseProps & {
	path: StringProp;
	negative: BooleanProp;
};
export type SVGShape = ShapeTemplate<ShapeKind.SVG, SVGProps>;

// Alfabeti Africani

export type AlfabetiAfricaniProps = BaseProps & {
	alphabets: string[];
	negative: BooleanProp;
};
export type AlfabetiAfricaniShape = ShapeTemplate<
	ShapeKind.AlfabetiAfricani,
	AlfabetiAfricaniProps
>;

/**
 * Utility union types
 */

export type Props =
	| VoidProps
	| RectangleProps
	| EllipseProps
	| QuarterProps
	| SVGProps
	| AlfabetiAfricaniProps;
export type Shape =
	| VoidShape
	| RectangleShape
	| EllipseShape
	| QuarterShape
	| SVGShape
	| AlfabetiAfricaniShape;
