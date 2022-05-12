<script lang="ts">
	import InputText from './inputText.svelte';

	export let value: Array<any> = [];
	export let parseNumbers = false;
	export let separator = ';';

	let string = '';
	arrayToString();

	$: {
		string, stringToArray();
	}

	function stringToArray() {
		const tempValue = string
			.split(separator)
			.map((s) => s.trim())
			.filter((s) => s);

		if (!parseNumbers) {
			value = [...tempValue];
		} else {
			value = [...tempValue.map((s) => parseFloat(s)).filter((n) => !isNaN(n))];
		}
	}

	function arrayToString() {
		if (value.length) {
			string = value.join(`${separator} `);
		}
	}
</script>

<!--  -->

<InputText bind:value={string} />
