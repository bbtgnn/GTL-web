<script lang="ts">
	import { page } from '$app/stores';
	import { base } from '$app/paths';
	import { AppBar } from '@skeletonlabs/skeleton';
	import clsx from 'clsx';

	const links: Array<{ text: string; href: string }> = [
		{ text: 'Glyphs', href: '/glyphs' },
		{ text: 'Output', href: '/output' }
	];

	$: classes = (href: string) => {
		return clsx('btn btn-sm variant-ghost-surface', {
			'!bg-primary-500': href === $page.url.pathname
		});
	};
</script>

<AppBar padding="p-1" slotLead="space-x-1">
	<svelte:fragment slot="lead">
		{#each links as { text, href }}
			<a class={classes(href)} href={`${base}${href}`} rel="noreferrer">
				{text}
			</a>
		{/each}
	</svelte:fragment>
</AppBar>
