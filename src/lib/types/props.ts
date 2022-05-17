import type { NumberValue, OrientationValue, BooleanValue } from './values';

/**
 * Prop types
 */

export enum PropKind {
	Number = 'number',
	Orientation = 'orientation',
	Boolean = 'boolean'
}

export interface PropTemplate<K, V> {
	kind: K;
	value: V;
}

//

export interface NumberProp
	extends PropTemplate<PropKind.Number, NumberValue> {}

export interface OrientationProp
	extends PropTemplate<PropKind.Orientation, OrientationValue> {}

export interface BooleanProp
	extends PropTemplate<PropKind.Boolean, BooleanValue> {}

// Utility union type
export type Prop = NumberProp | OrientationProp | BooleanProp;

/**
 * Extendable props
 */

export interface BaseProps {
	scale_x: NumberProp;
	scale_y: NumberProp;
	rotation: NumberProp;
}

export interface CurveProps {
	squaring: NumberProp;
	negative: BooleanProp;
}
