import SVGPathCommander from 'svg-path-commander';

//

export const PathLetters = ['C', 'M', 'Z', 'L'] as const;
export type PathLetter = (typeof PathLetters)[number];

type ArrayDirective =
	| ['Z']
	| ['M' | 'L', number, number]
	| ['C', number, number, number, number, number, number];

export function getAbsoluteSVGPath(
	path: paper.PathItem
): Array<ArrayDirective> {
	// Getting SVG path
	const svg = path.exportSVG({ asString: false }) as SVGElement;
	// Getting path attribute
	const d = svg.getAttribute('d');

	if (d) {
		// Making path in absolute coordinates
		const absPath: Array<ArrayDirective> = new SVGPathCommander(d, {
			round: 0
		})
			.optimize()
			.normalize()
			.toAbsolute().segments;

		return absPath;
	} else {
		return [];
	}
}

type OpentypeDirective =
	| { type: 'Z' }
	| { type: 'M' | 'L'; x: number; y: number }
	| {
			type: 'C';
			x1: number;
			y1: number;
			x2: number;
			y2: number;
			x: number;
			y: number;
	  };

//

export function arrayToDirectives(
	directives: Array<ArrayDirective>
): Array<OpentypeDirective> {
	const dirs: Array<OpentypeDirective> = [];

	if (!directives.length) {
		return [];
	}

	for (const item of directives) {
		if (item[0] == 'Z') {
			dirs.push({ type: item[0] });
		}
		if (item[0] == 'L' || item[0] == 'M') {
			dirs.push({
				type: item[0],
				x: item[1],
				y: item[2]
			});
		}
		if (item[0] == 'C') {
			dirs.push({
				type: item[0],
				x1: item[1],
				y1: item[2],
				x2: item[3],
				y2: item[4],
				x: item[5],
				y: item[6]
			});
		}
	}

	return dirs;
}

//

export function editPathFromDirectives(
	p: opentype.Path,
	d: Array<OpentypeDirective>,
	ty = 0
): opentype.Path {
	for (const i of d) {
		if (i.type == 'M') {
			p.moveTo(i.x, i.y + ty);
		} else if (i.type == 'L') {
			p.lineTo(i.x, i.y + ty);
		} else if (i.type == 'Z') {
			p.close();
		} else if (i.type == 'C') {
			p.bezierCurveTo(i.x1, i.y1 + ty, i.x2, i.y2 + ty, i.x, i.y + ty);
		}
	}
	return p;
}
