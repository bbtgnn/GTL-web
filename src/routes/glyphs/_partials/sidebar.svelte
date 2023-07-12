<script lang="ts">
	import Sidebar from '../../../lib/components/sidebar.svelte';
	import { glyphs } from '$lib/stores';

	function addGlyph() {
		$glyphs = [...$glyphs, { id: '', name: '[select name]', structure: '' }];
	}
</script>

<Sidebar title="Glyphs" on:click={addGlyph}>
	<ul class="list-nav">
		{#each $glyphs as glyph}
			<li class="">
				<a href={`/glyphs/${glyph.id}`}>
					<span class="flex-auto">{glyph.name}</span>
				</a>
			</li>
		{/each}
	</ul>
</Sidebar>
