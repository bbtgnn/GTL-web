<script lang="ts">
	import { Button, P } from 'flowbite-svelte';
	import Dropzone from 'svelte-file-dropzone/Dropzone.svelte';

	export let selected: Array<string> = [];

	type HandleFilesEvent = CustomEvent<{ acceptedFiles: File[]; rejectedFiles: File[] }>;

	async function readFileAsDataUrl(file: File): Promise<string> {
		return new Promise((resolve, reject) => {
			const reader = new FileReader();
			reader.readAsDataURL(file);
			reader.onload = () => {
				const res = reader.result as string;
				resolve(res);
			};
		});
	}

	async function handleFilesSelect(e: HandleFilesEvent) {
		const { acceptedFiles } = e.detail;
		selected = await Promise.all(acceptedFiles.map(readFileAsDataUrl));
	}

	function removeSelected() {
		selected = [];
	}
</script>

<div class="space-y-2">
	<Dropzone on:drop={handleFilesSelect} accept={'image/svg+xml'} inputElement={null} />
	{#if selected.length > 0}
		<div class="flex items-center space-x-2">
			<P>Selected {selected.length} files</P>
			<Button on:click={removeSelected}>[x] Remove</Button>
		</div>
	{/if}
</div>
