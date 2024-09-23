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

		margin: 5px 10px 5px 0px;

		font-weight: 400;
		font-size: var(--text-16);
		line-height: 16px;
	}

	.clickable {
		cursor: pointer;
		transition: all 0.35s;
	}

	.clickable:hover {
		color: var(--pink);
		border: 1px solid var(--pink);
	}
</style>
