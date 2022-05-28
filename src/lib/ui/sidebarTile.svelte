<script lang="ts">
	import type { Writable } from 'svelte/store';

	export let id: string;
	export let selection: Writable<string>;

	let active = false;

	$: active = $selection == id;

	function select() {
		$selection = id;
	}

	if (!$selection) {
		$selection = id;
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
