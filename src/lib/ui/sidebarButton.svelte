<script lang="ts" generics="T">
	import Button from '$lib/components/ui/button/button.svelte';
	import type { Writable } from 'svelte/store';

	export let value: T;
	export let selection: Writable<T>;

	let active = false;

	$: active = $selection == value;

	function select() {
		$selection = value;
	}

	$: if (!$selection) {
		$selection = value;
	}
</script>

<!--  -->

<Button
	on:click={select}
	class="block w-full overflow-hidden whitespace-nowrap text-left"
	variant={active ? 'default' : 'outline'}
>
	<slot />
</Button>
