import type { Input } from './types';
import { ChoiceInput } from './choice';
import { RangeInput } from './range';
import { FixedInput } from './fixed';

export const shapes = [ChoiceInput, RangeInput, FixedInput] as Array<
	typeof Input
>;
