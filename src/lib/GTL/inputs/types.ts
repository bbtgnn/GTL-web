export abstract class Input<Type, Data> {
	abstract name: string;
	data: Data;

	constructor(data: Data) {
		this.data = data;
	}

	abstract calc(): Promise<Type>;
}
