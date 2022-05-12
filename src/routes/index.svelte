<script lang="ts">
	import SyntaxEditor from '$lib/components/syntax/syntax.svelte';
	import { type Syntax, ShapeKind } from '$lib/types';

	//

	let syntax: Syntax = [
		{
			symbol: '@',
			shape: {
				kind: ShapeKind.Void,
				props: {}
			}
		},
		{
			symbol: '#',
			shape: {
				kind: ShapeKind.Void,
				props: {}
			}
		}
	];
</script>

<SyntaxEditor bind:syntax />

<pre>{JSON.stringify(syntax, null, 2)}</pre>
