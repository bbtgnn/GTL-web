<div
	class="space-y-6 flex w-60 flex-col flex-nowrap p-6 bg-slate-100 flex-shrink-0"
>
	<!-- Slot 1 -->
	<slot name="topArea" />

	{#if $$slots.topArea}
		<hr class="border-b-1 border-slate-300" />
	{/if}

	<!-- Glyph list -->
	<p class="text-small font-mono text-slate-900 mb-4 text-sm">
		<slot name="listTitle" />
	</p>
	<div class="flex-grow scroll-auto space-y-1">
		<slot name="items" />
	</div>
</div>
