<script lang="ts">
	import Sidebar from '$lib/ui/sidebar.svelte';
	import SidebarTile from '$lib/ui/sidebarTile.svelte';
	import { nanoid } from 'nanoid';
	import Button from '$lib/ui/button.svelte';

	let items = [
		{ id: nanoid(5), label: 'ciao' },
		{ id: nanoid(5), label: 'biaos' },
		{ id: nanoid(5), label: 'dsad' },
		{ id: nanoid(5), label: 'memin' },
		{ id: nanoid(5), label: 'culo' },
		{ id: nanoid(5), label: 'giggig' },
		{ id: nanoid(5), label: 'ciazzzz' }
	];

	let selection: string = '';

	function click() {
		console.log('clicked!');
	}
</script>

<!--  -->

<Sidebar bind:selection>
	<svelte:fragment slot="topArea">
		<Button on:click={click}>Click!</Button>
	</svelte:fragment>
	<svelte:fragment slot="listTitle">Lista glifi</svelte:fragment>
	<svelte:fragment slot="items">
		{#each items as item (item.id)}
			<SidebarTile id={item.id}>{item.label}</SidebarTile>
		{/each}
	</svelte:fragment>
</Sidebar>
