import type { BaseProps, CurveProps, OrientationProp } from './props';

/**
 * Shapes
 */

export enum ShapeKind {
	Void = 'void',
	Rectangle = 'rectangle',
	Ellipse = 'ellipse',
	Quarter = 'quarter'
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

/**
 * Utility union types
 */

export type Props = VoidProps | RectangleProps | EllipseProps | QuarterProps;
export type Shape = VoidShape | RectangleShape | EllipseShape | QuarterShape;
