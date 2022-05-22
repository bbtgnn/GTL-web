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
	import Label from '$lib/ui/label.svelte';

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
		{ label: 'quarter', value: ShapeKind.Quarter },
		{ label: 'void', value: ShapeKind.Void }
	];
</script>

<!--  -->

<div class="flex flex-row flex-nowrap gap-4">
	<!-- Symbol -->
	<div class="text-xl p-4 bg-slate-400 font-mono">
		{rule.symbol}
	</div>

	<!-- Shape -->
	<div class="flex flex-col">
		<Label target="shape">Forma</Label>
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
			<div>
				<Label target="scale_x">Scala orizzontale</Label>
				<InputProp bind:prop={rule.shape.props.scale_x} />
			</div>
			<div>
				<Label target="scale_y">Scala verticale</Label>
				<InputProp bind:prop={rule.shape.props.scale_y} />
			</div>
			<div>
				<Label target="rotation">Rotazione</Label>
				<InputProp
					numberDefaults={{
						fixed: 0,
						choice: { options: [0, 45] },
						range: { min: 0, max: 90 }
					}}
					bind:prop={rule.shape.props.rotation}
				/>
			</div>
		{/if}
		<!--  -->
		{#if rule.shape.kind == ShapeKind.Quarter || rule.shape.kind == ShapeKind.Ellipse}
			<div>
				<Label target="squaring">Squadratura</Label>
				<InputProp
					numberDefaults={{
						fixed: 0.56,
						choice: { options: [0, 0.56, 1] },
						range: { min: 0, max: 1 }
					}}
					bind:prop={rule.shape.props.squaring}
				/>
			</div>
			<div>
				<Label target="negative">Negativo</Label>
				<InputProp bind:prop={rule.shape.props.negative} />
			</div>
		{/if}
		<!--  -->
		{#if rule.shape.kind == ShapeKind.Quarter}
			<div>
				<Label target="orientamento">Orientamento</Label>
				<InputProp bind:prop={rule.shape.props.orientation} />
			</div>
		{/if}
	</div>
</div>
