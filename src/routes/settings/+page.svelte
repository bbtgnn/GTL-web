<script lang="ts">
	import { syntaxes, metrics, glyphs, selectedGlyph, svgArchive } from '$lib/stores';
	import Upload from '$lib/ui/upload.svelte';
	import Button from '$lib/ui/button.svelte';
	import Tooltip from '$lib/ui/tooltip.svelte';
	import { currentSyntaxId } from '../syntax/+page.svelte';
	import { load } from 'opentype.js';
	import {
		listAllFilesAndDirs,
		type DirectoryItem,
		askDirectory,
		defaultDirectoryItem
	} from '$lib/fileSystem';
	import { Hr, Spinner } from 'flowbite-svelte';

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
		$svgArchive = defaultDirectoryItem;
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
					metrics: $metrics,
					svgArchive: $svgArchive
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
			const json = (e as any).detail.json;
			const res = JSON.parse(json);
			//
			$syntaxes = res['syntaxes'];
			$glyphs = res['glyphs'];
			$metrics = res['metrics'];
			$svgArchive = res['svgArchive'];
			//
			$selectedGlyph = '';
			$currentSyntaxId = '';
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

	/* Load SVGS */
	let loading = false;

	async function uploadSvgs() {
		loading = true;
		const directoryHandle = await askDirectory();
		if (!directoryHandle) return null;
		const directory = await listAllFilesAndDirs(directoryHandle, true, ['.DS_Store']);
		if (!directory) {
			loading = false;
			return;
		}
		$svgArchive = directory;
		loading = false;
	}

	function clearSvgs() {
		$svgArchive = defaultDirectoryItem;
	}
</script>

<!--  -->

<div class="p-8 space-y-8 flex flex-col">
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
	<Hr />
	<div class="flex flex-col grow">
		<p class="font-mono">Cartella SVG</p>
		<div class="flex space-x-2 items-center">
			<Button on:click={uploadSvgs}>Carica SVG</Button>
			{#if loading}
				<Spinner />
			{/if}
			<Button on:click={clearSvgs}>Elimina SVG</Button>
		</div>
		<div class="h-0 grow overflow-y-auto p-4 bg-gray-100 mt-4">
			<pre>{JSON.stringify($svgArchive, null, 2)}</pre>
		</div>
	</div>
</div>
