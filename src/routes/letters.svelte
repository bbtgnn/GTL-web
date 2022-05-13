<script lang="ts">
	import _ from 'lodash';

	interface Glyph {
		name: string;
		structure: string;
	}

	let glyphs: Array<Glyph> = [];

	function addGlyph() {
		const newGlyph = {
			name: '',
			structure: ''
		};
		glyphs.push(newGlyph);
		glyphs = glyphs;

		if (!selectedGlyph) {
			selectedGlyph = glyphs.length - 1;
		}
	}

	function selectGlyph(g: Glyph) {
		selectedGlyph = glyphs.indexOf(g);
	}

	let selectedGlyph: number | null = null;

	$: if (glyphs.length) {
		//
		const symbols = [];
		for (const g of glyphs) {
			const txt = g.structure.replace(/(\r\n|\n|\r)/gm, '');
			if (txt) {
				symbols.push(...txt.split(''));
			}
		}

		// Unique symbols
		const uniqueSymbols = _.uniq(symbols);
	}
</script>

<!--  -->

<div class="flex flex-row flex-nowrap items-stretch w-screen h-screen">
	<!-- Sidebar -->
	<div class="bg-slate-200 p-4 flex gap-4 flex-col flex-nowrap">
		<!-- Button -->
		<div>
			<button on:click={addGlyph}>+ Aggiungi glifo</button>
		</div>

		<!-- Glyph list -->
		<div class="flex flex-col flex-grow flex-nowrap gap-2 overflow-scroll">
			{#each glyphs as g, i (g)}
				<div class="p-2 bg-gray-50">
					{#if g.name}
						{g.name}
					{:else}
						[no name]
					{/if}
				</div>
			{/each}
		</div>
	</div>

	<!-- Glyph area -->
	<div class="bg-red-300 flex-grow p-4 flex flex-col flex-nowrap gap-4">
		{#if selectedGlyph !== null}
			ciao
		{:else if glyphs.length}
			<p>Select a glyph</p>
		{:else}
			<p>Aggiungi un glifo</p>
		{/if}
	</div>
</div>
