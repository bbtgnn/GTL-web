<script lang="ts" context="module">
	/** @type {import('@sveltejs/kit').Load} */
	export async function load() {
		return {
			status: 302,
			redirect: `/letters`
		};
	}
</script>
