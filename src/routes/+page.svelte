<script>
	import { appState } from '$lib/state.svelte';

	appState.worker?.postMessage({
		id: 'test',
		python: 'print("Hello, world!")',
		context: {}
	});

	if (appState.worker)
		appState.worker.onmessage = (ev) => {
			console.log(ev);
		};
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>
