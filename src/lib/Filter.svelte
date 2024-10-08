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
		padding: 7.5px 15px;

		border: 1px solid var(--black);

		font-family: "SuisseIntl";
		font-size: var(--text-16);
		letter-spacing: .45px;

		display: inline-block;
		
		transition: all 0.35s;
	}

	button.clickable:hover {
		color: var(--pink);
		border: 1px solid var(--pink);
	}
</style>
