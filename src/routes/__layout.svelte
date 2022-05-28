<script lang="ts">
	import '$lib/app.css';
	import { base } from '$app/paths';

	import NavLink from '$lib/ui/navLink.svelte';

	const links = [
		{ href: `${base}/glyphs`, text: 'Glifi' },
		{ href: `${base}/syntax`, text: 'Sintassi' },
		{ href: `${base}/metrics`, text: 'Metriche' },
		{ href: `${base}/output`, text: 'Output' },
		{ href: `${base}/settings`, text: 'Impostazioni' }
	];

	let navHgt: number = 0;
</script>

<!--  -->
<div class="block h-screen w-screen">
	<nav
		bind:clientHeight={navHgt}
		class="flex flex-row flex-nowrap py-2 px-4 bg-slate-900 space-x-2"
	>
		{#each links as l}
			<NavLink href={l.href}>{l.text}</NavLink>
		{/each}
	</nav>

	<main style:--h="{navHgt}px" class="block w-full">
		<slot />
	</main>
</div>

<!--  -->
<style>
	main {
		height: calc(100% - var(--h));
	}
</style>
