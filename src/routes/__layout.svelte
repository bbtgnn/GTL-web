<script>
	import '$lib/app.css';
	import { base, assets } from '$app/paths';

	const links = [
		{ href: `${base}/letters`, text: 'Lettere' },
		{ href: `${base}/syntax`, text: 'Sintassi' },
		{ href: `${base}/metrics`, text: 'Metriche' },
		{ href: `${base}/output`, text: 'Output' }
	];
</script>

<!--  -->

<div class="flex flex-row flex-nowrap p-2 bg-slate-900 gap-2">
	{#each links as l}
		<a
			class="font-mono text-white px-3 py-1 bg-slate-700 hover:bg-slate-600"
			href={l.href}>{l.text}</a
		>
	{/each}
</div>
<slot />
