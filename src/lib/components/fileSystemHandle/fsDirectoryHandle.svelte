<script lang="ts">
	import { onMount } from 'svelte';
	import FileSystemHandle from './fsHandleCore.svelte';

	export let handle: FileSystemDirectoryHandle;

	let entries: [string, FileSystemDirectoryHandle | FileSystemFileHandle][] = [];

	onMount(async () => {
		for await (let [key, value] of handle.entries()) {
			entries = [...entries, [key, value]];
		}
	});
</script>

{#each entries as [key, value]}
	<FileSystemHandle handle={value} />
{/each}
