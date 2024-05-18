<script lang="ts">
	import clsx from 'clsx';
	import { twMerge } from 'tailwind-merge';

	export let width: `w-${number}` = 'w-60';
	export let position: 'left' | 'right' = 'left';

	let className = '';
	export { className as class };

	$: classes = twMerge(
		clsx(
			width,
			{
				'border-r': position == 'left',
				'border-l': position == 'right'
			},
			'flex flex-shrink-0 flex-col gap-4 overflow-hidden p-4',
			className
		)
	);
</script>

<div class={classes}>
	<slot />
</div>
