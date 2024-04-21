<script lang="ts">
	export let disabled = false;
</script>

<button
	class="flex bg-slate-300 p-3 hover:bg-slate-400 font-mono text-slate-900 disabled:opacity-40 disabled:hover:bg-slate-300"
	on:click
	{disabled}
>
	<slot />
</button>
