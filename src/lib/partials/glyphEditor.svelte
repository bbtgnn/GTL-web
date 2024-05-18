<script lang="ts">
	import { Textarea } from '$lib/components/ui/textarea';

	export let glyph: string;
</script>

<Textarea
	bind:value={glyph}
	class="grow bg-slate-50 p-8 font-mono text-lg tracking-[0.75em] hover:bg-slate-100"
/>
