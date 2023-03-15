<script lang="ts">
	import paper from 'paper';
	import { svg } from '$lib/GTL/shapes_old';

	//

	let isPaperReady = false;

	function loadPaper(node: HTMLCanvasElement) {
		paper.setup(node.id);
		isPaperReady = true;
	}

	async function testSVG() {
		const path = '/mende_03.svg';
		const rect = new paper.Rectangle(0, 0, 150, 150);

		const paths = await svg(rect, path);
		for (const p of paths) {
			p.strokeWidth = 2;
			p.strokeColor = new paper.Color('red');
		}
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
