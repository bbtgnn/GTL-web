<script lang="ts">
	import { UNICODE, findCharInUnicodeList } from '$lib/GTL/unicode';
	import { glyphs, selectedGlyph } from '$lib/stores';
	import type { GlyphInput } from '$lib/types';
	import { Modal } from 'flowbite-svelte';
	import { nanoid } from 'nanoid';
	import Button from '$lib/ui/button.svelte';

	export let open = false;

	//

	let char = '';

	$: foundGlyph = findCharInUnicodeList(char);
	$: glyphAlreadyExists = doesGlyphAlreadyExist(foundGlyph);
	$: canAdd = foundGlyph && !glyphAlreadyExists;

	//

	function doesGlyphAlreadyExist(glyph: typeof foundGlyph): boolean {
		return Boolean($glyphs.find((g) => g.name == foundGlyph?.[0]));
	}

	function addGlyph() {
		if (!foundGlyph) return;

		if (glyphAlreadyExists) return;

		const newGlyph: GlyphInput = {
			id: nanoid(5),
			name: foundGlyph[0],
			structure: ''
		};

		$glyphs = [...$glyphs, newGlyph];
		$selectedGlyph = newGlyph.id;
		char = '';
		open = false;
	}
</script>

<Modal outsideclose class="!rounded-none-none !font-mono" bind:open title="Aggiungi glifo">
	<div class="flex items-stretch gap-4 font-mono">
		<input
			class="border hover:border-blue-600 px-4"
			bind:value={char}
			maxlength="1"
			minlength="1"
			size="1"
		/>

		<div class="grow bg-gray-100 flex items-center px-4">
			{#if glyphAlreadyExists}
				<p>Questo glifo è già aggiunto</p>
			{:else if foundGlyph}
				<p>{foundGlyph[0]} – {foundGlyph[1]}</p>
			{:else}
				<p>Nessun glifo trovato</p>
			{/if}
		</div>

		<Button disabled={!canAdd} on:click={addGlyph}>+ Aggiungi glifo</Button>
	</div>
</Modal>
