<script lang="ts" context="module">
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

	async function listAllFilesAndDirs(directoryHandle: FileSystemDirectoryHandle) {
		const masterList = [];
		const files: Array<{ name: string; handle: FileSystemFileHandle; kind: FileSystemHandleKind }> =
			[];
		for await (let [name, handle] of directoryHandle) {
			const { kind } = handle;
			if (kind === 'directory') {
				// files.push({name, handle, kind});
				files.push(...(await listAllFilesAndDirs(handle)));
			} else {
				files.push({ name, handle, kind });
			}
		}
		return files;
	}

	async function openFolder() {
		const directoryHandle = await askDirectory();
		if (!directoryHandle) return;
		await handleDirectory(directoryHandle);
	}
</script>

<script lang="ts">
	import Button from '$lib/ui/button.svelte';
	import FileSystemHandle from './fileSystemHandle/fsHandle.svelte';
</script>

<FileSystemHandle />
