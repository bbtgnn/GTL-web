<script lang="ts">
	import { nanoid } from 'nanoid';

	export let value: string;
	export let name: string = nanoid(5);
</script>

<!--  -->

<input
	type="text"
	bind:value
	class="p-2 bg-slate-200 font-mono"
	id={name}
	{name}
/>
