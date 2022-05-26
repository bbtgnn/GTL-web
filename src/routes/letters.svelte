<script lang="ts">
	import type { Glyph } from '$lib/types';
	import { glyphs } from '$lib/stores';
	import { nanoid } from 'nanoid';

	import InputText from '$lib/ui/inputText.svelte';

	//

	let selectedGlyph: number;

	if (!$glyphs.length) {
		addGlyph();
	}

	$: if (!selectedGlyph) {
		selectedGlyph = 0;
	}

	function addGlyph() {
		const newGlyph = {
			name: nanoid(5),
			structure: ''
		};
		$glyphs = [...$glyphs, newGlyph];

		selectedGlyph = $glyphs.length - 1;
	}

	function selectGlyph(g: Glyph) {
		selectedGlyph = $glyphs.indexOf(g);
	}
</script>

<!--  -->

<div class="h-full flex flex-row flex-nowrap items-stretch">
	<!-- sidebar -->
	<div class="space-y-6 flex w-60 flex-col flex-nowrap p-6 bg-slate-100">
		<!-- Add glyph -->
		<button
			class="flex bg-slate-300 p-3 hover:bg-slate-400 font-mono text-slate-900"
			on:click={() => {
				addGlyph();
			}}>+ Aggiungi glifo</button
		>

		<hr class="border-b-1 border-slate-300" />

		<!-- Glyph list -->
		<p class="text-small font-mono text-slate-900 mb-4 text-sm">Lista glifi</p>
		<div class="flex-grow scroll-auto space-y-1">
			{#each $glyphs as g, i (g.name)}
				{@const sel = i == selectedGlyph}
				<div
					class:text-white={sel}
					class:bg-slate-800={sel}
					class:text-slate-900={!sel}
					class:bg-slate-300={!sel}
					class="px-3 py-1 {!sel ? 'hover:bg-slate-400' : ''}"
					on:click={() => {
						selectGlyph(g);
					}}
				>
					{g.name}
				</div>
			{/each}
		</div>
	</div>

	<!-- Glyph area -->
	<div class="p-8 space-y-8">
		{#if selectedGlyph !== null}
			<div>
				<p class="text-small font-mono text-slate-900 mb-2 text-sm">
					Nome glifo
				</p>
				<InputText bind:value={$glyphs[selectedGlyph].name} />
			</div>
			<hr />
			<div>
				<p class="text-small font-mono text-slate-900 mb-2 text-sm">
					Struttura glifo
				</p>
				<textarea
					class=" h-80 p-2 bg-slate-200 tracking-[0.75em] hover:bg-slate-300 font-mono focus:ring-4"
					bind:value={$glyphs[selectedGlyph].structure}
				/>
			</div>
		{/if}
	</div>
</div>
