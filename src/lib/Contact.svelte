<script>
	export let name, tel, mail;
</script>

<div>
	<p>{name}</p>
	<a href="tel:{tel}">{tel.replace(/\d{3}(?=\d)/g, '$& ')}</a><br />
	<a href="mailto:{mail}">{mail}</a>
</div>

<style>
	div {
		width: 100%;

		margin: 0 5.208vw;
		padding-bottom: 60px;
	}

	p,
	a {
		margin: 0;

		font-size: var(--text-32);
	}

	a {
		color: var(--pink);
		transition: all var(--link-transition);
	}

	a:hover {
		color: var(--black);
	}

	@media screen and (max-width: 1200px) {
		div {
			margin: 0;
		}
	}
</style>
