<script lang="ts">
	import '../app.postcss';

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
</script>

<!--  -->
<div class="h-screen w-screen flex flex-col items-stretch overflow-hidden">
	<nav class="flex flex-row flex-nowrap py-2 px-4 bg-slate-900 space-x-2 shrink-0">
		{#each links as l}
			<NavLink href={l.href}>{l.text}</NavLink>
		{/each}
	</nav>

	<main class="h-0 grow overflow-hidden flex flex-row items-stretch font-mono">
		<slot />
	</main>
</div>
