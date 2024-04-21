<script lang="ts">
	export let open = false;
</script>

<dialog {open}>
	<p>Greetings, one and all!</p>
	<form method="dialog">
		<button>OK</button>
	</form>
</dialog>

<style>
	dialog {
		position: fixed;
	}

	dialog::backdrop {
		background-color: darkorange;
	}
</style>
