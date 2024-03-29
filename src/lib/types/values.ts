/**
 * Adding a base value type (the others are: number, boolean)
 */

export enum Orientation {
	NW = 'NW',
	SW = 'SW',
	NE = 'NE',
	SE = 'SE'
}

export const orientations = Object.values(Orientation);

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

export type FixedValue<T> = ValueTemplate<ValueKind.Fixed, T>;

export type ChoiceValue<T> = ValueTemplate<
	ValueKind.Choice,
	ValueDataChoice<T>
>;

export type RangeValue = ValueTemplate<ValueKind.Range, ValueDataRange>;

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

export type StringData = string | ValueDataChoice<string>;
export type StringValue = FixedValue<string> | ChoiceValue<string>;
export type StringValueKind = ValueKind.Fixed | ValueKind.Choice;
