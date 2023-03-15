import { Shape } from './types';

export type RectangleProps = Record<string, unknown>;

export class Rectangle extends Shape<RectangleProps> {
	name = 'rectangle';

	constructor(props = {}) {
		super(props);
	}

	async render() {
		return [] as Array<paper.PathItem>;
	}
}
