<script>
	export let label, text;
	export let topBorder = true;
</script>

<div class:top-border={topBorder}>
	<p>{label}</p>
	<p>{text}</p>
</div>

<style>
	div {
		position: relative;
		align-items: center;
		display: flex;
		flex-direction: row;

		margin: 0 38px;
		padding: 50px 0;
	}

	p:first-of-type {
		width: 40%;

		font-size: var(--text-96);

		color: var(--black);
		text-transform: uppercase;
	}

	p:last-of-type {
		width: 60%;

		font-size: var(--text-32);

		white-space: pre-line;

		margin-right: 10%;
	}

	.top-border {
		border-top: 1px solid #000000;
	}

	@media screen and (max-width: 1200px) {
		div {
			flex-direction: column;
			margin: 0 38px;
		}

		p:first-of-type {
			width: 100% !important;

			text-align: center;
		}

		p:last-of-type {
			position: relative;
			left: 5% !important;
		}
	}
</style>
