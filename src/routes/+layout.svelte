<script lang="ts">
	import '../app.postcss';

	//

	import { base } from '$app/paths';
	import { page } from '$app/stores';
	import Button from '$lib/components/ui/button/button.svelte';
	import type { Page } from '@sveltejs/kit';

	//

	type Link = {
		href: string;
		text: string;
	};

	const links: Link[] = [
		{ href: `${base}/glyphs`, text: 'Glifi' },
		{ href: `${base}/syntax`, text: 'Sintassi' },
		{ href: `${base}/metrics`, text: 'Metriche' },
		{ href: `${base}/output`, text: 'Output' },
		{ href: `${base}/settings`, text: 'Impostazioni' }
	];

	function isActive(path: string, page: Page) {
		return page.url.pathname === path;
	}
</script>

<!--  -->
<div class="flex h-screen w-screen flex-col items-stretch overflow-hidden">
	<nav class="space-x-2 border-b px-4 py-2">
		{#each links as link}
			{@const active = isActive(link.href, $page)}
			<Button href={link.href} variant={active ? 'secondary' : 'outline'} class="!border">
				{link.text}
			</Button>
		{/each}
	</nav>

	<main class="flex h-0 grow flex-row items-stretch overflow-hidden">
		<slot />
	</main>
</div>
