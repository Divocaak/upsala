<script>
	export let label;
	export let clickable = false;
</script>

<p on:click class:clickable>{label}</p>

<style>
	p {
		display: inline-block;
		border: 1px solid black;
		padding: 5px 10px;
		margin: 5px;

		font-weight: 400;
		font-size: var(--text-16);
		line-height: 16px;

		transition: all 0.35s;
	}
	p:hover {
		color: var(--pink);
        border: 1px solid var(--pink);
	}

	.clickable {
		cursor: pointer;
	}
</style>
