<script>
	export let label, text;
	export let topBorder = true;
</script>

<!-- TODO ask plus btns -->
<div class:top-border={topBorder}>
	<p>{label}</p>
	<p>{text}</p>
</div>

<style>
	div {
		position: relative;
		align-items: start;
		display: flex;
		flex-direction: row;

		margin: 0 38px;
	}

	p:first-of-type {
		display: inline-block;
		width: 40%;

		font-weight: 600;
		font-size: var(--text-96);
		line-height: 93%;

		color: var(--thick-text);
		text-transform: uppercase;
	}

	p:last-of-type {
		width: 60%;
		display: inline-block;

		font-weight: 400;
		font-size: var(--text-32);
		line-height: 138%;
	}

	.top-border {
		border-top: 1px solid #000000;
	}

	@media screen and (max-width: 1200px) {
		div {
			flex-direction: column;
			margin: 0 38px;
		}

		p {
			padding: 0;
			width: 100%;
			padding: 0 38px;
		}
	}
</style>
