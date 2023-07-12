<script lang="ts">
	import { Plus } from 'svelte-heros-v2';
	export let title: string = '';
</script>

<!-- <div
	class="w-60 flex flex-col flex-nowrap p-6 bg-slate-100 flex-shrink-0 overflow-hidden"
> -->
<div class="w-60 px-4 pt-2 bg-surface-200-700-token h-full space-y-2">
	<div class="flex justify-between items-center">
		<p class="text-sm">{title}</p>
		<button type="button" class="btn-icon btn-icon-sm variant-outline-surface" on:click>
			<Plus size="16" />
		</button>
	</div>

	<hr />

	<!-- <div class="h-0 grow overflow-y-auto space-y-1"> -->
	<slot />
	<!-- </div> -->
</div>
