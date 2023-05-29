<script lang="ts">
	import InputText from './inputText.svelte';

	export let value: Array<any> = [];
	export let parseNumbers = false;
	export let parseBooleans = false;
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

		if (!parseNumbers && !parseBooleans) {
			value = [...tempValue];
		} else if (parseNumbers) {
			value = [...tempValue.map((s) => parseFloat(s)).filter((n) => !isNaN(n))];
		} else if (parseBooleans) {
			value = [
				...tempValue
					.map((s) => {
						if (s == 'true') return true;
						else if (s == 'false') return false;
						else return null;
					})
					.filter((n) => n !== null)
			];
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
