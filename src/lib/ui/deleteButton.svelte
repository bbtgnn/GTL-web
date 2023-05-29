<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import Button from './button.svelte';

	const dispatch = createEventDispatcher();

	let confirm = false;

	function showConfirm() {
		confirm = true;
	}

	function hideConfirm() {
		confirm = false;
	}

	function dispatchDelete() {
		dispatch('delete');
	}
</script>

{#if !confirm}
	<Button on:click={showConfirm}>[x] Elimina</Button>
{:else}
	<div class="flex flex-row items-center space-x-2">
		<p class="font-mono text-sm">Sicuro? L'azione non è reversibile</p>
		<Button on:click={dispatchDelete}>[x] Elimina</Button>
		<Button on:click={hideConfirm}>Annulla</Button>
	</div>
{/if}
