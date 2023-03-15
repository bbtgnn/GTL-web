import { Input } from './types';

//

export type RangeInputData = {
	min: number;
	max: number;
};

export class RangeInput extends Input<number, RangeInputData> {
	name = 'range';

	constructor(data: RangeInputData) {
		super(data);
	}

	async calc(): Promise<number> {
		return Math.random() * (this.data.max - this.data.min) + this.data.min;
	}
}
