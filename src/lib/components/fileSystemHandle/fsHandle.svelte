<script lang="ts">
	import { SidebarGroup, SidebarWrapper, Sidebar, Button } from 'flowbite-svelte';
	import FSHandleCore from './fsHandleCore.svelte';
	import OpenFolder from '../openFolder.svelte';

	let handle: FileSystemHandle | undefined;

	const handleClick = async () => {
		handle = await window.showDirectoryPicker();
	};
</script>

<Button on:click={handleClick}>Open folder</Button>
<SidebarGroup>
	{#if handle}
		<FSHandleCore {handle} />
	{/if}
</SidebarGroup>
