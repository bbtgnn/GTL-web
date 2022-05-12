import type { NumberValue, OrientationValue } from './values';

/**
 * Prop types
 */

export enum PropKind {
	Number = 'number',
	Orientation = 'orientation'
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

// Utility union type
export type Prop = NumberProp | OrientationProp;

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
}
