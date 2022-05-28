<script lang="ts">
	import {
		syntaxes,
		metrics,
		glyphs,
		selectedGlyph,
		selectedStyle
	} from '$lib/stores';
	import Upload from '$lib/ui/upload.svelte';
	import Button from '$lib/ui/button.svelte';
	import Tooltip from '$lib/ui/tooltip.svelte';

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

	function importFont(e: any) {
		try {
			//
			const json = e.detail.json;
			const res = JSON.parse(json);
			//
			$syntaxes = res['syntaxes'];
			$glyphs = res['glyphs'];
			$metrics = res['metrics'];
			//
			$selectedGlyph = '';
			$selectedStyle = '';
			//
			importTooltipOk = true;
		} catch (e) {
			importTooltipFail = true;
			console.log('ImportError');
		}
	}

	// Tooltip import
	let importTooltipOk = false;
	let importTooltipFail = false;

	function closeTooltipFail() {
		importTooltipFail = false;
	}
</script>

<!--  -->

<div class="p-8 space-y-8">
	<div>
		<p class=" font-mono">Elimina progetto</p>
		<p class="font-mono text-sm mb-2 text-slate-600">
			Il progetto verrà esportato automaticamente prima di essere eliminato
		</p>
		<Button on:click={clear}>Clear</Button>
	</div>
	<div>
		<p class="mb-2 font-mono">Esporta progetto</p>
		<Button on:click={exportFont}>Esporta</Button>
	</div>
	<div class="space-y-2">
		<p class="font-mono">Importa progetto</p>
		<Upload on:upload={importFont}>Importa</Upload>

		<!-- Tooltips -->
		<Tooltip bind:visible={importTooltipOk} state="positive">
			<p class="font-mono text-slate-900">
				Caricamento riuscito! Controlla la sintassi e i glifi :)
			</p>
		</Tooltip>
		<Tooltip bind:visible={importTooltipFail} state="negative">
			<div class="flex flex-row justify-between items-center">
				<p class="font-mono text-slate-900">Errore di caricamento :(</p>
				<Button on:click={closeTooltipFail}>X</Button>
			</div>
		</Tooltip>
	</div>
</div>
