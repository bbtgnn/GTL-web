<div
	class="w-60 flex flex-col flex-nowrap p-6 bg-slate-100 flex-shrink-0 overflow-hidden"
>
	<div class="space-y-4 pb-4">
		<slot name="topArea" />

		{#if $$slots.topArea}
			<hr class="border-b-1 border-slate-300" />
		{/if}

		<p class="text-small font-mono text-slate-900 mb-4 text-sm">
			<slot name="listTitle" />
		</p>
	</div>

	<div class="h-0 grow overflow-y-auto space-y-1">
		<slot name="items" />
	</div>
</div>
