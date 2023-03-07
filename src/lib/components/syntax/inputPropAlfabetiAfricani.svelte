<script lang="ts">
	import letters from '$lib/letters.json';

	export let alfabeti: Array<string> = [];

	const keys = Object.keys(letters);
</script>

<div class="flex flex-col pt-2 pl-4 border-l-2 border-l-slate-200">
	{#each keys as key}
		<label class="font-mono text-sm">
			<input
				type="checkbox"
				bind:group={alfabeti}
				name="flavours"
				value={key}
			/>
			{key}
		</label>
	{/each}
</div>
