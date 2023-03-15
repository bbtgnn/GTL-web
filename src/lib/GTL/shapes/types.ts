export type ShapeProps = Record<string, unknown>;

export abstract class Shape<Props extends ShapeProps> {
	abstract name: string;
	props: Props;

	constructor(props: Props) {
		this.props = props;
	}

	abstract render(): Promise<Array<paper.PathItem>>;
}
