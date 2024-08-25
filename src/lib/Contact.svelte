<script>
	export let name, tel, mail;
</script>

<div>
	<p>{name}</p>
	<a href="tel:{tel}">{tel}</a><br />
	<a href="mailto:{mail}">{mail}</a>
</div>

<style>
	div {
        margin: 0 5.208vw;
	}

	p,
	a {
		margin: 0;
		font-weight: 400;
		font-size: var(--text-24);
		line-height: 138%;
	}

	a {
		color: var(--pink);
        transition: all var(--link-transition);
	}

	a:hover {
		color: var(--black);
	}
</style>
