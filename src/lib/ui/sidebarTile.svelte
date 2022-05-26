<script lang="ts">
	import { getContext } from 'svelte';
	import Sidebar, { getCtx } from './sidebar.svelte';

	console.log(getCtx());

	export let id: string;

	function select() {}
</script>

<!-- <div
	class:text-white={selected}
	class:bg-slate-800={selected}
	class:text-slate-900={!selected}
	class:bg-slate-300={!selected}
	class="px-3 py-1 {!selected ? 'hover:bg-slate-400' : ''}"
	on:click={() => {
		selectGlyph(g);
	}}
>
	{g.name}
</div> -->
