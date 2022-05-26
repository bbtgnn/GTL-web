<script lang="ts">
	import Sidebar from '$lib/ui/sidebar.svelte';
	import SidebarTile from '$lib/ui/sidebarTile.svelte';
	import { nanoid } from 'nanoid';

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

	// $: console.log(selection);

	function click() {
		console.log('clicked!');
	}
</script>

<!--  -->

<Sidebar bind:selection>
	<svelte:fragment slot="topArea">
		<button
			class="flex bg-slate-300 p-3 hover:bg-slate-400 font-mono text-slate-900"
			on:click={click}>Click!</button
		>
	</svelte:fragment>
	<svelte:fragment slot="listTitle">Lista glifi</svelte:fragment>
	<svelte:fragment slot="items">
		{#each items as item (item.id)}
			<SidebarTile id={item.id}>{item.label}</SidebarTile>
		{/each}
	</svelte:fragment>
</Sidebar>
