<script lang="ts" context="module">
	export type SelectOption<T> = { label: string; value: T };
	export type SelectOptions<T> = Array<SelectOption<T>>;
</script>

<script lang="ts">
	import { nanoid } from 'nanoid';
	import { createEventDispatcher } from 'svelte';

	export let options: SelectOptions<any>;
	export let value: any;
	export let name: string = nanoid(5);

	const dispatch = createEventDispatcher();

	function changed() {
		dispatch('changed', value);
	}
</script>

<select
	bind:value
	on:change={changed}
	class="block h-10 bg-slate-200 font-mono rounded-none"
	{name}
	id={name}
>
	{#each options as o (o.label)}
		<option value={o.value}>{o.label}</option>
	{/each}
</select>
