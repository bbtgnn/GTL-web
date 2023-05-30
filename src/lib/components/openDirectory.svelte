<script lang="ts">
	import { openDirectory, type DirectoryStructure } from '$lib/fileSystem';
	import Button from '$lib/ui/button.svelte';
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher<{ directory: DirectoryStructure }>();

	async function handleClick() {
		const directory = await openDirectory();
		if (!directory) return;
		dispatch('directory', { directory });
	}
</script>

<Button on:click={handleClick}>Open folder</Button>
