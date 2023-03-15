import { Input } from './types';

//

export type ChoiceInputData<Type> = Array<Type>;

export class ChoiceInput<Type> extends Input<Type, ChoiceInputData<Type>> {
	name = 'choice';

	constructor(data: Type[]) {
		super(data);
	}

	async calc(): Promise<Type> {
		return this.data[Math.floor(Math.random() * this.data.length)];
	}
}
