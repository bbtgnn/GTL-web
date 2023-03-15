import { Shape } from './types';

//

export enum Orientation {
	NW = 'NW',
	SW = 'SW',
	NE = 'NE',
	SE = 'SE'
}

export const orientations = Object.values(Orientation);

//

export type EllipseProps = {
	squaring: number;
	orientation: Orientation;
	negative: boolean;
};

export class Quarter extends Shape<EllipseProps> {
	name = 'quarter';

	constructor(props: EllipseProps) {
		super(props);
	}

	async render() {
		return [] as Array<paper.PathItem>;
	}
}
