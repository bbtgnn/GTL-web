<script>
	import '../app.css';

	const links = [
		{ href: '/letters', text: 'Lettere' },
		{ href: '/syntax', text: 'Sintassi' },
		{ href: '/metrics', text: 'Metriche' },
		{ href: '/output', text: 'Output' }
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
