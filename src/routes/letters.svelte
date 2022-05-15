<script lang="ts">
	import type { Glyph } from '$lib/types';
	import { glyphs } from '$lib/stores';
	import { nanoid } from 'nanoid';

	import InputText from '$lib/ui/inputText.svelte';

	//

	let selectedGlyph: number | null = null;

	if (!$glyphs.length) {
		addGlyph();
	}

	$: if ($glyphs.length && selectedGlyph == null) {
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

<div class="flex flex-row flex-nowrap items-stretch w-screen h-screen">
	<!-- sidebar -->
	<div class="flex basis-60 flex-col flex-nowrap gap-2 p-4 bg-slate-100">
		<button
			class="flex bg-slate-200 mb-4 p-3 hover:bg-slate-300"
			on:click={() => {
				addGlyph();
			}}>+ Add Glyph</button
		>

		{#each $glyphs as g, i (g.name)}
			<div
				class:bg-slate-300={i != selectedGlyph}
				class:bg-slate-400={i == selectedGlyph}
				class="px-3 py-1"
				on:click={() => {
					selectGlyph(g);
				}}
			>
				{g.name}
			</div>
		{/each}
	</div>

	<!-- Glyph area -->
	<div class="flex-grow p-4 flex flex-col flex-nowrap gap-4">
		{#if !$glyphs.length}
			<p>Aggiungi un glifo</p>
		{:else if selectedGlyph !== null}
			<InputText bind:value={$glyphs[selectedGlyph].name} />
			<textarea
				class="flex-grow p-2 bg-slate-200 font-mono"
				bind:value={$glyphs[selectedGlyph].structure}
			/>
		{/if}
	</div>
</div>
