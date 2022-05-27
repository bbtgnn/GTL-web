<script lang="ts">
	import type { GlyphInput } from '$lib/types';
	import { glyphs } from '$lib/stores';
	import { nanoid } from 'nanoid';

	import InputText from '$lib/ui/inputText.svelte';
	import Sidebar from '$lib/ui/sidebar.svelte';
	import SidebarTile from '$lib/ui/sidebarTile.svelte';
	import Button from '$lib/ui/button.svelte';

	//

	let selectedGlyph: string;

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
		selectedGlyph = newGlyph.id;
	}
</script>

<!--  -->

<div class="h-full flex flex-row flex-nowrap items-stretch">
	<!-- sidebar -->
	<Sidebar bind:selection={selectedGlyph}>
		<svelte:fragment slot="topArea">
			<Button on:click={addGlyph}>+ Aggiungi glifo</Button>
		</svelte:fragment>
		<svelte:fragment slot="listTitle">Lista glifi</svelte:fragment>
		<svelte:fragment slot="items">
			{#each $glyphs as g (g.id)}
				<SidebarTile id={g.id}>
					{g.name}
				</SidebarTile>
			{/each}
		</svelte:fragment>
	</Sidebar>

	<!-- Glyph area -->
	<div class="p-8 space-y-8">
		{#each $glyphs as g}
			{#if g.id == selectedGlyph}
				<div>
					<p class="text-small font-mono text-slate-900 mb-2 text-sm">
						Nome glifo
					</p>
					<InputText bind:value={g.name} />
				</div>
				<hr />
				<div>
					<p class="text-small font-mono text-slate-900 mb-2 text-sm">
						Struttura glifo
					</p>
					<textarea
						class=" h-80 p-2 bg-slate-200 tracking-[0.75em] hover:bg-slate-300 font-mono focus:ring-4"
						bind:value={g.structure}
					/>
				</div>
			{/if}
		{/each}
	</div>
</div>
