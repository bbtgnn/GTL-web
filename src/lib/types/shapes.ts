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

export interface VoidProps {}

export interface VoidShape extends ShapeTemplate<ShapeKind.Void, VoidProps> {}

// Rectangle

export interface RectangleProps extends BaseProps {}

export interface RectangleShape
	extends ShapeTemplate<ShapeKind.Rectangle, RectangleProps> {}

// Ellipse

export interface EllipseProps extends BaseProps, CurveProps {}

export interface EllipseShape
	extends ShapeTemplate<ShapeKind.Ellipse, EllipseProps> {}

// Quarter

export interface QuarterProps extends BaseProps, CurveProps {
	orientation: OrientationProp;
}

export interface QuarterShape
	extends ShapeTemplate<ShapeKind.Quarter, QuarterProps> {}

/**
 * Utility union types
 */

export type Props = VoidProps | RectangleProps | EllipseProps | QuarterProps;
export type Shape = VoidShape | RectangleShape | EllipseShape | QuarterShape;
