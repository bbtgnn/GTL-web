<script lang="ts">
	import { nanoid } from 'nanoid';

	export let value: number;
	export let name: string = nanoid(5);
	export let step: number = 1;
</script>

<input
	type="number"
	bind:value
	class="w-20 p-2 bg-slate-200 font-mono"
	id={name}
	{name}
	{step}
/>
