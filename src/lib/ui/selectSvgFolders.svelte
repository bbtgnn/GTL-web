<script lang="ts">
	import { svgArchive } from '$lib/stores';

	export let selected: Array<string> = [];
	let directories = getFoldersFromSvgArchive();

	function getFoldersFromSvgArchive() {
		const folders: Array<string> = [];
		if ($svgArchive.kind == 'directory') {
			for (let item of $svgArchive.value) {
				if (item.kind == 'directory') {
					folders.push(item.name);
				}
			}
		}
		return folders;
	}
</script>

<div class="flex flex-col space-y-1">
	{#each directories as directory}
		<label class="text-sm">
			<input
				type="checkbox"
				bind:group={selected}
				value={directory}
				name="directory"
				id={directory}
			/>
			<span>{directory}</span>
		</label>
	{/each}
</div>
