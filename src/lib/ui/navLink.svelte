<script lang="ts">
	import { page } from '$app/stores';

	export let href: string;

	let active: boolean = false;
	$: active = $page.url.pathname == `${href}/`;

	const inactiveClasses = 'text-white bg-slate-700 hover:bg-slate-600';
	const activeClasses = 'text-slate-900 bg-slate-100';
</script>

<!--  -->

<a
	class="font-mono px-3 py-1 {active ? activeClasses : inactiveClasses} "
	{href}><slot /></a
>
