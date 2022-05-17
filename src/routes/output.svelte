<script lang="ts">
	import { glyphs, syntaxes } from '$lib/stores';

	import opentype from 'opentype.js';

	// Create the bézier paths for each of the glyphs.
	// Note that the .notdef glyph is required.
	const notdefGlyph = new opentype.Glyph({
		name: '.notdef',
		unicode: 0,
		advanceWidth: 650,
		path: new opentype.Path()
	});

	const aPath = new opentype.Path();
	aPath.moveTo(100, 0);
	aPath.lineTo(100, 700);
	aPath.lineTo(200, 700);
	aPath.lineTo(200, 0);
	aPath.close();

	// more drawing instructions...
	const aGlyph = new opentype.Glyph({
		name: 'A',
		unicode: 65,
		advanceWidth: 650,
		path: aPath
	});

	const glyphs_ = [notdefGlyph, aGlyph];
	const font = new opentype.Font({
		familyName: 'OpenTypeSans',
		styleName: 'Medium',
		unitsPerEm: 1000,
		ascender: 800,
		descender: -200,
		glyphs: glyphs_
	});

	function doStuff(node: HTMLCanvasElement) {
		const ctx = node.getContext('2d');
		if (ctx) {
			aGlyph.draw(ctx, 0, 200, 200);
		}
	}

	// font.download();
</script>

<!--  -->

<canvas
	class="border-2 border-slate-400"
	use:doStuff
	width="200"
	height="200"
	id="A"
/>
