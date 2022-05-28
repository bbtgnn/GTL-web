<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import Button from './button.svelte';

	//

	const dispatch = createEventDispatcher();

	let fileinput: HTMLInputElement;

	const onFileSelected = (event: any) => {
		const file = event.target.files[0];
		const reader = new FileReader();
		reader.readAsText(file);
		reader.onload = (e: ProgressEvent) => {
			const json = (e.target as any).result as string;
			dispatch('upload', {
				json
			});
		};
	};

	function startUpload() {
		fileinput.click();
	}
</script>

<div>
	<Button on:click={startUpload}>
		<slot /></Button
	>
	<input
		class="hidden"
		type="file"
		accept=".json"
		on:change={onFileSelected}
		bind:this={fileinput}
	/>
</div>
