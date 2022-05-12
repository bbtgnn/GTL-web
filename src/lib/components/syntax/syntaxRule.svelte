<script lang="ts">
	import {
		type Rule,
		type Shape,
		type Props,
		ShapeKind,
		voidProps,
		rectangleProps,
		ellipseProps,
		quarterProps
	} from '$lib/types';

	import InputProp from './inputProp.svelte';
	import Select, { type SelectOptions } from '$lib/ui/select.svelte';

	//

	export let rule: Rule;

	//

	let tempShape = rule.shape.kind;

	changeShape();

	function changeShape() {
		const data: Record<ShapeKind, Props> = {
			void: voidProps,
			rectangle: rectangleProps,
			ellipse: ellipseProps,
			quarter: quarterProps
		};
		rule.shape.props = data[tempShape];
		rule.shape.kind = tempShape;
	}

	//

	const shapeOptions: SelectOptions<ShapeKind> = [
		{ label: 'rectangle', value: ShapeKind.Rectangle },
		{ label: 'ellipse', value: ShapeKind.Ellipse },
		{ label: 'void', value: ShapeKind.Void },
		{ label: 'quarter', value: ShapeKind.Quarter }
	];
</script>

<!--  -->

<div class="flex flex-row flex-nowrap gap-4">
	<!-- Symbol -->
	<div class="text-xl p-4 bg-slate-400 font-mono">
		{rule.symbol}
	</div>

	<!-- Shape -->
	<div>
		<Select
			options={shapeOptions}
			bind:value={tempShape}
			on:change={changeShape}
		/>
	</div>

	<!-- Props -->
	<div class="flex flex-col flex-nowrap gap-4">
		<!--  -->
		{#if rule.shape.kind != ShapeKind.Void}
			<InputProp bind:prop={rule.shape.props.scale_x} />
			<InputProp bind:prop={rule.shape.props.scale_y} />
			<InputProp bind:prop={rule.shape.props.rotation} />
		{/if}
		<!--  -->
		{#if rule.shape.kind == ShapeKind.Quarter || rule.shape.kind == ShapeKind.Ellipse}
			<InputProp bind:prop={rule.shape.props.squaring} />
		{/if}
		<!--  -->
		{#if rule.shape.kind == ShapeKind.Quarter}
			<InputProp bind:prop={rule.shape.props.orientation} />
		{/if}
	</div>
</div>
