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

		font-family: 'SuisseIntl';
		font-size: var(--text-36);
		letter-spacing: 0.45px;
		font-weight: 300;

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
