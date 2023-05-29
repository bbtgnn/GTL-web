<script lang="ts">
	import Button from '$lib/ui/button.svelte';

	async function askDirectory() {
		if (!('showDirectoryPicker' in window)) return;
		if (!(typeof window?.showDirectoryPicker === 'function')) return;
		return await window.showDirectoryPicker();
	}

	async function handleDirectory(directoryHandle: FileSystemDirectoryHandle) {
		for await (const entry of directoryHandle.values()) {
			console.log(entry);
		}
	}

	async function openFolder() {
		const directoryHandle = await askDirectory();
		if (!directoryHandle) return;
		await handleDirectory(directoryHandle);
	}
</script>

<Button on:click={openFolder}>Select folder</Button>
