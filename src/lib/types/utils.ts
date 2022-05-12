import type { NumberProp, OrientationProp } from './props';
import { PropKind } from './props';
import { ValueKind } from './values';
import type { Orientation } from './values';
import type {
	RectangleProps,
	EllipseProps,
	QuarterProps,
	VoidProps
} from './shapes';

/**
 * Props Creators
 */

export function numberPropFixed(v: number): NumberProp {
	return { kind: PropKind.Number, value: { kind: ValueKind.Fixed, data: v } };
}
export function orientationPropFixed(o: Orientation): OrientationProp {
	return {
		kind: PropKind.Orientation,
		value: { kind: ValueKind.Fixed, data: 'NE' }
	};
}

/**
 * Ready-made props
 */

export const rectangleProps: RectangleProps = {
	scale_x: numberPropFixed(1),
	scale_y: numberPropFixed(1),
	rotation: numberPropFixed(0)
};

export const ellipseProps: EllipseProps = {
	scale_x: numberPropFixed(1),
	scale_y: numberPropFixed(1),
	rotation: numberPropFixed(0),
	squaring: numberPropFixed(0.56)
};

export const quarterProps: QuarterProps = {
	scale_x: numberPropFixed(1),
	scale_y: numberPropFixed(1),
	rotation: numberPropFixed(0),
	squaring: numberPropFixed(0.56),
	orientation: orientationPropFixed('NE')
};

export const voidProps: VoidProps = {};
