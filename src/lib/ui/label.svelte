<script lang="ts">
	export let target: string;
</script>

<!--  -->

<label class="font-mono text-slate-700 text-sm" for={target}>
	<slot />
</label>
