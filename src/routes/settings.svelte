<script lang="ts">
	import { syntaxes, metrics, glyphs } from '$lib/stores';
	import Upload from '$lib/ui/upload.svelte';

	function clear() {
		exportFont();
		$syntaxes = [];
		$glyphs = [];
		$metrics = {
			height: 1,
			ascender: 1,
			descender: 1
		};
	}

	function exportFont() {
		let dataStr =
			'data:text/json;charset=utf-8,' +
			encodeURIComponent(
				JSON.stringify({
					glyphs: $glyphs,
					syntaxes: $syntaxes,
					metrics: $metrics
				})
			);
		let dlAnchorElem = document.createElement('a');
		dlAnchorElem.setAttribute('href', dataStr);
		dlAnchorElem.setAttribute('download', 'scene.json');
		dlAnchorElem.click();
	}

	let json = '';

	$: {
		if (json) {
			const res = JSON.parse(json);
			$syntaxes = res['syntaxes'];
			$glyphs = res['glyphs'];
			$metrics = res['metrics'];
			json = '';
		}
	}
</script>

<button on:click={clear}>Clear</button>
<button on:click={exportFont}>Esporta</button>
<Upload bind:json />
