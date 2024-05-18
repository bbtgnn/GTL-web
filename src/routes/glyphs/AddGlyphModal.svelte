<script lang="ts">
	import { findCharInUnicodeList } from '$lib/GTL/unicode';
	import { glyphs, selectedGlyph } from '$lib/stores';
	import type { GlyphInput } from '$lib/types';
	import * as Dialog from '$lib/components/ui/dialog';
	import { nanoid } from 'nanoid';
	import { Button } from '$lib/components/ui/button';
	import { Input } from '$lib/components/ui/input';
	import Icon from '$lib/ui/icon.svelte';
	import Plus from 'lucide-svelte/icons/plus';

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

<Dialog.Root bind:open>
	<Dialog.Content class="max-w-[700px]">
		<Dialog.Header>
			<Dialog.Title>Aggiungi glifo</Dialog.Title>
		</Dialog.Header>

		<div class="flex items-stretch gap-4 pt-4">
			<Input class="w-12 text-center" maxlength={1} minlength={1} size={1} bind:value={char} />

			<div class="flex grow items-center rounded-lg bg-slate-100 px-4">
				{#if glyphAlreadyExists}
					<p>Questo glifo è già stato aggiunto</p>
				{:else if foundGlyph}
					<p>{foundGlyph[0]} – {foundGlyph[1]}</p>
				{:else}
					<p>Nessun glifo trovato</p>
				{/if}
			</div>

			<Button disabled={!canAdd} on:click={addGlyph}>
				<Icon src={Plus} />
				Aggiungi glifo
			</Button>
		</div>
	</Dialog.Content>
</Dialog.Root>
