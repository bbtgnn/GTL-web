import opentype from 'opentype.js';

export function rectangle(
	x: number,
	y: number,
	w: number,
	h: number
): opentype.Path {
	const path = new opentype.Path();
	path.moveTo(x, y);
	path.lineTo(x + w, y);
	path.lineTo(x + w, y + h);
	path.lineTo(200, 0);
	path.close();
	return path;
}
