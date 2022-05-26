<script lang="ts">
	import { getCtx } from './sidebar.svelte';

	export let id: string;

	let active = false;

	const ctx = getCtx();

	$: active = $ctx == id;

	function select() {
		$ctx = id;
	}

	if (!$ctx) {
		$ctx = id;
	}
</script>

<!--  -->

<div
	class:text-white={active}
	class:bg-slate-800={active}
	class:text-slate-900={!active}
	class:bg-slate-300={!active}
	class="font-mono px-3 py-1 {!active ? 'hover:bg-slate-400' : ''}"
	on:click={select}
>
	<slot />
</div>
