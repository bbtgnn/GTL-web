import type { Shape, ShapeProps } from './shapes/types';

export type Rule<Props extends ShapeProps = ShapeProps> = {
	shape: Shape<Props>['name'];
	props: Props;
	transforms: {
		[key: string]: any;
	};
};

export type Syntax = {
	[char: string]: Rule;
};
