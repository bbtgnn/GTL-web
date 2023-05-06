<script lang="ts">
	import type { GlyphInput } from '$lib/types';
	import { glyphs, selectedGlyph } from '$lib/stores';
	import { nanoid } from 'nanoid';

	import InputText from '$lib/ui/inputText.svelte';
	import Sidebar from '$lib/ui/sidebar.svelte';
	import SidebarTile from '$lib/ui/sidebarTile.svelte';
	import Button from '$lib/ui/button.svelte';
	import GlyphPreview from '$lib/partials/glyphPreview.svelte';

	//

	if (!$glyphs.length) {
		addGlyph();
	}

	function addGlyph() {
		const newGlyph: GlyphInput = {
			id: nanoid(5),
			name: '[aggiungi nome]',
			structure: ''
		};
		$glyphs = [...$glyphs, newGlyph];
		$selectedGlyph = newGlyph.id;
	}
</script>

<!--  -->

<div class="flex flex-row flex-nowrap items-stretch overflow-hidden grow">
	<div class="shrink-0 flex items-stretch">
		<Sidebar>
			<svelte:fragment slot="topArea">
				<Button on:click={addGlyph}>+ Aggiungi glifo</Button>
			</svelte:fragment>
			<svelte:fragment slot="listTitle">Lista glifi</svelte:fragment>
			<svelte:fragment slot="items">
				{#each $glyphs as g (g.id)}
					<SidebarTile selection={selectedGlyph} id={g.id}>
						{g.name}
					</SidebarTile>
				{/each}
			</svelte:fragment>
		</Sidebar>
	</div>

	<!-- Glyph area -->
	<div class="p-8 space-y-8 grow flex flex-col items-stretch">
		{#each $glyphs as g}
			{#if g.id == $selectedGlyph}
				<div class="shrink-0">
					<p class="text-small font-mono text-slate-900 mb-2 text-sm">
						Nome glifo
					</p>
					<InputText bind:value={g.name} />
				</div>
				<hr />
				<div class="grow flex flex-col items-stretch">
					<p class="text-small font-mono text-slate-900 mb-2 text-sm">
						Struttura glifo
					</p>
					<textarea
						class="h-0 grow p-2 bg-slate-200 tracking-[0.75em] hover:bg-slate-300 font-mono focus:ring-4"
						bind:value={g.structure}
					/>
				</div>
			{/if}
		{/each}
	</div>

	<div class="p-8 border border-l-gray-300 overflow-y-scroll">
		<GlyphPreview />
	</div>
</div>
