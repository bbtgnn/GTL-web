<script lang="ts" context="module">
	import { setContext, getContext } from 'svelte';

	export type Ctx = {
		selected: string;
	};

	export const key = {};

	export function setCtx(ctx: Ctx) {
		setContext<Ctx>(key, ctx);
	}

	export function getCtx(): Ctx {
		return getContext(key);
	}
</script>

<script lang="ts">
	export let selected: string = '';
</script>

<!--  -->

<!-- sidebar -->
<div class="space-y-6 flex w-60 flex-col flex-nowrap p-6 bg-slate-100">
	<!-- Slot 1 -->
	<slot name="topArea" />

	{#if $$slots.topArea}
		<hr class="border-b-1 border-slate-300" />
	{/if}

	<!-- Glyph list -->
	<!-- Slot 2 -->
	<p class="text-small font-mono text-slate-900 mb-4 text-sm">
		<slot name="listTitle" />
	</p>
	<div class="flex-grow scroll-auto space-y-1" />
</div>
