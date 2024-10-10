<script>
	export let label;
	export let active = false;
</script>

<button on:click class:active>
	{label}
</button>

<style>
	button {
		all: unset;

		margin: 5px 10px 5px 0px;
		padding: 7.5px 15px;

		font-family: 'SuisseIntl';
		font-size: var(--text-36);
		letter-spacing: 0.45px;

		transition: all 0.35s;
	}

	button:hover,
	button.active {
		color: var(--pink);
	}

	@media screen and (max-width: 1200px) {
		button {
            padding: 0;
		}
	}
</style>
