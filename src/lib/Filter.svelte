<script>
	export let label;
	export let clickable = false;
</script>

<button on:click class:clickable>
	{label}
</button>

<style>
	button {
		all: unset;

		margin: 5px 10px 5px 0px;
		padding: 5px 10px;

		border: 1px solid black;

		font-family: "SuisseIntl";
		font-weight: 400;
		font-size: var(--text-16);
		line-height: 16px;

		display: inline-block;
		
		transition: all 0.35s;
	}

	.clickable {
		cursor: pointer;
	}

	button.clickable:hover {
		color: var(--pink);
		border: 1px solid var(--pink);
	}
</style>
