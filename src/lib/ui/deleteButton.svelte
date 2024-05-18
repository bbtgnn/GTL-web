<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	import * as Dialog from '$lib/components/ui/dialog';
	import { Button } from '$lib/components/ui/button';

	import Icon from './icon.svelte';
	import X from 'lucide-svelte/icons/x';
	import Undo from 'lucide-svelte/icons/undo';

	//

	const dispatch = createEventDispatcher<{ delete: {} }>();

	function dispatchDelete() {
		dispatch('delete', {});
	}
</script>

<Dialog.Root>
	<Dialog.Trigger>
		<Button variant="outline"><Icon src={X} mr /> Elimina</Button>
	</Dialog.Trigger>
	<Dialog.Content>
		<Dialog.Header>
			<Dialog.Title>
				<slot name="title"></slot>
			</Dialog.Title>
			<Dialog.Description>
				<slot name="description"></slot>
			</Dialog.Description>
		</Dialog.Header>
		<Dialog.Footer>
			<Dialog.Close>
				<Button variant="outline">
					<Icon src={Undo} mr /> Annulla
				</Button>
			</Dialog.Close>
			<Button on:click={dispatchDelete} variant="destructive">
				<Icon src={X} mr /> Elimina
			</Button>
		</Dialog.Footer>
	</Dialog.Content>
</Dialog.Root>
