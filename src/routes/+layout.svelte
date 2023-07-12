<script lang="ts">
	import '@skeletonlabs/skeleton/themes/theme-rocket.css';
	import '@skeletonlabs/skeleton/styles/skeleton.css';
	import '../app.postcss';

	import { page } from '$app/stores';

	import { AppShell } from '@skeletonlabs/skeleton';
	import Navbar from './_partials/navbar.svelte';
	import GlyphsSidebar from './glyphs/_partials/sidebar.svelte';

	$: showSidebarLeft = Boolean($page.route.id?.match(/glyphs/)?.[0]);
</script>

<AppShell>
	<svelte:fragment slot="header">
		<Navbar />
	</svelte:fragment>
	<svelte:fragment slot="sidebarLeft">
		{#if showSidebarLeft}
			<GlyphsSidebar />
		{/if}
	</svelte:fragment>
	<slot />
</AppShell>
