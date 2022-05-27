<script lang="ts">
	import { syntaxes, metrics, glyphs } from '$lib/stores';
	import Upload from '$lib/ui/upload.svelte';
	import Button from '$lib/ui/button.svelte';

	/**
	 * Clear project
	 */

	function clear() {
		exportFont();
		$syntaxes = [];
		$glyphs = [];
		$metrics = {
			height: 7,
			baseline: 1
		};
	}

	/**
	 * Export
	 */

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
		dlAnchorElem.setAttribute('download', 'GTL.json');
		dlAnchorElem.click();
	}

	/**
	 * Import font
	 */

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

<div class="p-8 space-y-8">
	<div>
		<p class="mb-2">Elimina progetto</p>
		<Button on:click={clear}>Clear</Button>
	</div>
	<div>
		<p class="mb-2">Esporta progetto</p>
		<Button on:click={exportFont}>Esporta</Button>
	</div>
	<div>
		<p class="mb-2">Importa progetto</p>
		<Upload bind:json />
	</div>
</div>
