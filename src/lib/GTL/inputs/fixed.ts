import { Input } from './types';

//

export type FixedInputData<Type> = Type;

export class FixedInput<Type> extends Input<Type, FixedInputData<Type>> {
	name = 'fixed';

	constructor(data: Type) {
		super(data);
	}

	async calc(): Promise<Type> {
		return this.data;
	}
}
