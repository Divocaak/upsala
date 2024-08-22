<script>
    export let textColor = "#000000";
</script>

<nav style="--nav-color: {textColor};">
	<a class="home" href="/">upsala</a>
	<div>
		<a href="/work">Work</a>
		<a href="/studio">Studio</a>
		<a href="/contact">Contact</a>
	</div>
</nav>

<style>
	a{
		color: var(--nav-color);
	}

	a:hover{
		color: var(--pink);
	}

	nav {
		position: sticky;
		top: 0;
		left: 0;
		width: 100%;
		padding: 0;
		margin: 0;
		z-index: 100;
		background: white
	}

	nav div {
		position: relative;
		float: right;
		top: 24px;
		right: 35px;
	}

	nav div a {
		font-size: 36px;
		line-height: 138%;
	}

	nav div a:nth-of-type(2) {
		padding: 0 40px;
	}

	.home {
		position: relative;
		padding: 0;
		margin: 0;
		font-size: 64px;
		line-height: 138%;
		font-weight: normal;
		padding-left: 35px;
	}

	nav > * {
		display: inline-flex;
	}
</style>
