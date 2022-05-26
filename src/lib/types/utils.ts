import type { BooleanProp, NumberProp, OrientationProp } from './props';
import { PropKind } from './props';
import { ValueKind } from './values';
import type { Orientation } from './values';
import type {
	RectangleProps,
	EllipseProps,
	QuarterProps,
	VoidProps
} from './shapes';
import { ShapeKind } from './shapes';
import type { Rule, Syntax } from './syntax';

/**
 * Utils
 */

export function randomChoice<T>(arr: Array<T>): T {
	return arr[Math.floor(arr.length * Math.random())];
}

/**
 * Props Creators
 */

export function numberPropFixed(v: number): NumberProp {
	return { kind: PropKind.Number, value: { kind: ValueKind.Fixed, data: v } };
}
export function orientationPropFixed(o: Orientation): OrientationProp {
	return {
		kind: PropKind.Orientation,
		value: { kind: ValueKind.Fixed, data: o }
	};
}

export function booleanPropFixed(b: boolean): BooleanProp {
	return {
		kind: PropKind.Boolean,
		value: { kind: ValueKind.Fixed, data: b }
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
	squaring: numberPropFixed(0.56),
	negative: booleanPropFixed(false)
};

export const quarterProps: QuarterProps = {
	scale_x: numberPropFixed(1),
	scale_y: numberPropFixed(1),
	rotation: numberPropFixed(0),
	squaring: numberPropFixed(0.56),
	orientation: orientationPropFixed('NE'),
	negative: booleanPropFixed(false)
};

export const voidProps: VoidProps = {};

/**
 * Rule creators
 */

export function createEmptyRule(s: string): Rule {
	return {
		symbol: s,
		shape: {
			kind: ShapeKind.Void,
			props: {}
		}
	};
}

export function createEmptySyntax(
	name: string,
	id: string,
	symbols: Array<string>
): Syntax {
	return { name, id, rules: symbols.map((s) => createEmptyRule(s)) };
}

/**
 * Props value calculator
 */

export function calcNumberProp(prop: NumberProp): number {
	if (prop.value.kind == ValueKind.Fixed) {
		return prop.value.data;
	} else if (prop.value.kind == ValueKind.Range) {
		const { min, max } = prop.value.data;
		return min + Math.random() * (max - min);
	} else if (prop.value.kind == ValueKind.Choice) {
		return randomChoice<number>(prop.value.data.options);
	} else {
		throw new Error('WrongValueKind');
	}
}

export function calcOrientationProp(prop: OrientationProp): Orientation {
	if (prop.value.kind == ValueKind.Fixed) {
		return prop.value.data;
	} else if (prop.value.kind == ValueKind.Choice) {
		return randomChoice<Orientation>(prop.value.data.options);
	} else {
		throw new Error('WrongValueKind');
	}
}

export function calcBooleanProp(prop: BooleanProp): boolean {
	if (prop.value.kind == ValueKind.Fixed) {
		return prop.value.data;
	} else if (prop.value.kind == ValueKind.Choice) {
		return randomChoice<boolean>(prop.value.data.options);
	} else {
		throw new Error('WrongValueKind');
	}
}
