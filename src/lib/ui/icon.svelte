<script lang="ts">
	import Acessibility from 'lucide-svelte/icons/accessibility';
	import clsx from 'clsx';

	type Icon = typeof Acessibility;

	export let src: Icon;

	export let ml = false;
	export let mr = false;
	export let size = 18;

	let className = '';
	export { className as class };

	$: classes = clsx(
		{
			'ml-1': ml,
			'mr-1': mr
		},
		className
	);
</script>

<svelte:component this={src} {size} class={classes} />
