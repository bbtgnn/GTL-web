<script lang="ts">
	export let json: string = '';
	let fileinput: HTMLInputElement;

	const onFileSelected = (ev: any) => {
		let file = ev.target.files[0];
		let reader = new FileReader();
		reader.readAsText(file);
		reader.onload = (e: ProgressEvent) => {
			json = (e.target as any).result as string;
		};
	};
</script>

<div>
	<!-- <div class="chan" on:click={()=>{fileinput.click();}}>Choose Image</div> -->
	<input
		type="file"
		accept=".json"
		on:change={(e) => onFileSelected(e)}
		bind:this={fileinput}
	/>
</div>
