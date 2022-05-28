<script context="module">
	import { writable } from 'svelte/store';

	export const visible = writable(false);

	export function close() {
		visible.set(false);
	}

	export function open() {
		visible.set(true);
	}
</script>

<script lang="ts">
	import { icons } from '$lib/icons';

	export let title = '';
</script>

<!-- -->

{#if $visible}
	<div class="modal">
		<div class="modal__top">
			<p class="modal__title">
				<strong>
					{title}
				</strong>
			</p>
			<button class="modal__close" on:click={close}>
				<svelte:component this={icons.close} />
			</button>
		</div>
		<div class="modal__content">
			<slot />
		</div>
	</div>
{/if}

<!--  -->
<style>
	.modal {
		position: fixed;
		top: 0;
		left: 0;
		width: 100vw;
		height: 100vh;
		overflow: auto;
		z-index: 9999;
		margin: 0; /* Counters eventual space-between*/

		background-color: white;
	}

	.modal__top {
		display: flex;
		flex-flow: row nowrap;
		align-items: center;
		justify-content: space-between;

		padding: var(--s-1) var(--s-3);
		border-bottom: 1px solid black;
		background-color: white;

		position: sticky;
		top: 0;
	}

	button {
		border: none;
		width: 32px;
		height: 32px;
		background-color: lightgray;
		display: flex;
		flex-flow: row nowrap;
		align-items: center;
		justify-content: center;
	}

	.modal__content {
		padding: var(--s-3);
	}
</style>
