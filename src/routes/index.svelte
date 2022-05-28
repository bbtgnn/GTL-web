<script lang="ts" context="module">
	import { base } from '$app/paths';

	/** @type {import('@sveltejs/kit').Load} */
	export async function load() {
		return {
			status: 302,
			redirect: `${base}/glyphs`
		};
	}
</script>
