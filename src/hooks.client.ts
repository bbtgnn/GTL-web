import type { ClientInit } from '@sveltejs/kit';
import Worker from '$lib/worker?worker';
import { appState } from '$lib/state.svelte';

export const init: ClientInit = async () => {
	const worker = new Worker();
	appState.worker = worker;
};
