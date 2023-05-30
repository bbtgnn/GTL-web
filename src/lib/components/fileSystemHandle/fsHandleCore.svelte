<script lang="ts">
	import FileSystemDirectoryHandle from './fsDirectoryHandle.svelte';
	import FileSystemFileHandle from './fsFileHandle.svelte';
	import { Checkbox, SidebarDropdownItem, SidebarDropdownWrapper } from 'flowbite-svelte';

	export let handle: FileSystemHandle;
</script>

{#if handle.kind == 'file'}
	<SidebarDropdownItem label={handle.name}>
		<Checkbox />
		<FileSystemFileHandle {handle} />
	</SidebarDropdownItem>
{:else if handle.kind == 'directory'}
	<SidebarDropdownWrapper label={handle.name}>
		<Checkbox />
		<FileSystemDirectoryHandle {handle} />
	</SidebarDropdownWrapper>
{/if}
