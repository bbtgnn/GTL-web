import type { Shape } from './shapes';

/**
 * Rule -> Syntax
 */

export type Rule = {
	symbol: string;
	shape: Shape;
};

export type Syntax = {
	id: string;
	name: string;
	rules: Array<Rule>;
};
