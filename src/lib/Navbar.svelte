<script>
	export let textColor = '#000000';
	export let transparent = false;
</script>

<nav style="--nav-color: {textColor};" class:transparent>
	<a class="home" href="/">upsala</a>
	<div>
		<a href="/reference">Reference</a>
		<a href="/studio">Studio</a>
		<a href="/contact">Kontakt</a>
	</div>
</nav>

<style>
	a {
		color: var(--nav-color);
	}

	a:hover {
		color: var(--pink);
	}

	nav {
		position: sticky;
		top: 0;
		left: 0;

		display: flex;
		justify-content: space-between;
		align-items: center;

		width: 100%;
		padding: 0;
		margin: 0;

		z-index: 100;

		background-color: white;
	}

	.transparent {
		background: transparent;
	}

	nav div {
		padding-right: 35px;
	}

	nav div a {
		font-size: var(--text-36);
		line-height: 138%;
	}

	nav div a:nth-of-type(2) {
		padding: 0 40px;
	}

	.home {
		font-size: var(--text-64);
		line-height: 138%;
		font-weight: normal;

		padding-left: 35px;
	}

	@media screen and (max-width: 600px) {
		nav {
			flex-direction: column;
			align-items: flex-start;
		}

		.home {
			width: 100%;
			text-align: center;
			padding: 0;
		}

		nav div {
			width: 100%;
			padding: 0;
			text-align: center;
			margin-top: 10px;
		}
	}
</style>
