<script lang="ts">
	import {
		type Rule,
		type Props,
		ShapeKind,
		voidProps,
		rectangleProps,
		ellipseProps,
		quarterProps,
		svgProps
	} from '$lib/types';

	import InputPropBoolean from './inputPropBoolean.svelte';
	import InputPropNumber from './inputPropNumber.svelte';
	import InputPropOrientation from './inputPropOrientation.svelte';
	import Select, { type SelectOptions } from '$lib/ui/select.svelte';
	import Label from '$lib/ui/label.svelte';
	import InputPropFile from './inputPropFile.svelte';

	//

	export let rule: Rule;

	//

	let tempShape = rule.shape.kind;

	if (tempShape != rule.shape.kind) {
		changeShape();
	}

	function changeShape() {
		const data: Record<ShapeKind, Props> = {
			void: voidProps,
			rectangle: rectangleProps,
			ellipse: ellipseProps,
			quarter: quarterProps,
			svg: svgProps
		};
		rule.shape.props = data[tempShape];
		rule.shape.kind = tempShape;
	}

	//

	const shapeOptions: SelectOptions<ShapeKind> = [
		{ label: 'rectangle', value: ShapeKind.Rectangle },
		{ label: 'ellipse', value: ShapeKind.Ellipse },
		{ label: 'quarter', value: ShapeKind.Quarter },
		{ label: 'void', value: ShapeKind.Void },
		{ label: 'svg', value: ShapeKind.SVG }
	];

	const angleDefaults = {
		fixed: 0,
		choice: { options: [0, 45] },
		range: { min: 0, max: 90 }
	};

	const squaringDefaults = {
		fixed: 0.56,
		choice: { options: [0, 0.56, 1] },
		range: { min: 0, max: 1 }
	};
</script>

<!--  -->

<div class="flex flex-col flex-nowrap">
	<!-- Symbol -->
	<div class="text-xl p-4 bg-slate-800 text-white font-mono">
		{rule.symbol}
	</div>

	<!-- Data -->
	<div class="space-y-8 px-0 pt-4">
		<!-- Shape -->
		<div class="space-y-1">
			<Label target="shape">Forma</Label>
			<Select options={shapeOptions} bind:value={tempShape} on:changed={changeShape} />
		</div>

		<!-- Props -->
		{#if rule.shape.kind != ShapeKind.Void}
			<div class="space-y-4 pl-8">
				{#if rule.shape.kind == ShapeKind.SVG}
					<div class="block">
						<Label target="">SVG Path</Label>
						<InputPropFile bind:prop={rule.shape.props.path} />
					</div>
					<div class="block">
						<Label target="negative">Negativo</Label>
						<InputPropBoolean bind:prop={rule.shape.props.negative} />
					</div>
				{/if}
				<!--  -->
				<div class="block">
					<Label target="scale_x">Scala orizzontale</Label>
					<InputPropNumber bind:prop={rule.shape.props.scale_x} />
				</div>
				<div class="block">
					<Label target="scale_y">Scala verticale</Label>
					<InputPropNumber bind:prop={rule.shape.props.scale_y} />
				</div>
				<div class="block">
					<Label target="rotation">Rotazione</Label>
					<InputPropNumber defaults={angleDefaults} bind:prop={rule.shape.props.rotation} />
				</div>
				<!--  -->
				{#if rule.shape.kind == ShapeKind.Quarter || rule.shape.kind == ShapeKind.Ellipse}
					<div class="block">
						<Label target="squaring">Squadratura</Label>
						<InputPropNumber defaults={squaringDefaults} bind:prop={rule.shape.props.squaring} />
					</div>
					<div class="block">
						<Label target="negative">Negativo</Label>
						<InputPropBoolean bind:prop={rule.shape.props.negative} />
					</div>
				{/if}
				<!--  -->
				{#if rule.shape.kind == ShapeKind.Quarter}
					<div class="block">
						<Label target="orientamento">Orientamento</Label>
						<InputPropOrientation bind:prop={rule.shape.props.orientation} />
					</div>
				{/if}
			</div>
		{/if}
	</div>
</div>
