/**
 * Adding a base value type (the others are: number, boolean)
 */

export const orientations = ['NW', 'SW', 'NE', 'SE'] as const;
export type Orientation = typeof orientations[number];

/**
 * Value kind (modes)
 */

export enum ValueKind {
	Fixed = 'fixed',
	Choice = 'choice',
	Range = 'range'
}

export interface ValueTemplate<K, T> {
	kind: K;
	data: T;
}

//

export interface ValueDataChoice<T> {
	options: Array<T>;
}

export interface ValueDataRange {
	min: number;
	max: number;
}

//

export interface FixedValue<T> extends ValueTemplate<ValueKind.Fixed, T> {}

export interface ChoiceValue<T>
	extends ValueTemplate<ValueKind.Choice, ValueDataChoice<T>> {}

export interface RangeValue
	extends ValueTemplate<ValueKind.Range, ValueDataRange> {}

/**
 * Values and modes they can have
 */

export type NumberData = number | ValueDataChoice<number> | ValueDataRange;
export type NumberValue = FixedValue<number> | ChoiceValue<number> | RangeValue;
export type NumberValueKind = ValueKind;

export type OrientationData = Orientation | ValueDataChoice<Orientation>;
export type OrientationValue =
	| FixedValue<Orientation>
	| ChoiceValue<Orientation>;
export type OrientationValueKind = ValueKind.Fixed | ValueKind.Choice;

export type BooleanData = boolean | ValueDataChoice<boolean>;
export type BooleanValue = FixedValue<boolean> | ChoiceValue<boolean>;
export type BooleanValueKind = ValueKind.Fixed | ValueKind.Choice;
