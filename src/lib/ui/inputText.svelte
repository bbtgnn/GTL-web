<script lang="ts">
	import { nanoid } from 'nanoid';
	import { onMount } from 'svelte';

	export let value: string;
	export let name: string = nanoid(5);
	export let grow = false;

	let thisInput: HTMLInputElement;

	onMount(() => {
		if (!grow) return;
		if (!thisInput) return;
		const parent = thisInput.parentElement;
		if (!parent) return;

		const resizerObserver = new ResizeObserver((entries) => {
			const entry = entries[0];
			if (!entry) return;
			const { width } = entry.contentRect;
			thisInput.style.width = `${width}px`;
		});

		resizerObserver.observe(parent);
		return () => {
			resizerObserver.disconnect();
		};
	});
</script>

<!--  -->

<input
	type="text"
	bind:value
	bind:this={thisInput}
	class="p-2 bg-slate-200 font-mono hover:bg-slate-300 focus:ring-4"
	id={name}
	{name}
/>
