<script lang="ts">
	import paper from 'paper';
	import { svg } from '$lib/GTL/shapes';

	//

	let isPaperReady = false;

	function loadPaper(node: HTMLCanvasElement) {
		paper.setup(node.id);
		isPaperReady = true;
	}

	async function testSVG() {
		const path = '/alfabeti-africani/mandombe/mandombe_04.svg';
		const rect = new paper.Rectangle(0, 0, 150, 150);

		const item = await svg(rect, path, false);
		console.log(item);
		// for (const [i, item] of items.entries()) {
		// }
	}

	$: if (isPaperReady) {
		testSVG();
	}
</script>

<canvas id="myCanvas" use:loadPaper width="200" height="200" />

<style>
	canvas {
		background-color: beige;
	}
</style>
