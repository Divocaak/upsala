<script>
	export let label = null;
</script>

<div>
	{#if label}<h2>{label}</h2>{/if}
</div>

<style>
	h2 {
		font-size: var(--text-20);

		text-transform: uppercase;
		color: var(--black);
	}

	div {
		position: relative;
		border-bottom: 1px solid #000000;
		margin: 0 38px;
	}
</style>
