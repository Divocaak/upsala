<script>
	export let label, image;
</script>

<div>
	<p>{label}<img src={image} alt="" /></p>
</div>

<style>
	div {
		margin-left: 38px;
	}

	p {
		width: 50%;

		font-weight: 400;
		font-size: var(--text-32);
		line-height: 170%;

		padding-left: 5px;
		margin: 0;

		transition: all 0.35s;
	}

	p:hover {
		color: #ffffff;
		background-color: var(--pink);
	}

	p:hover img {
		opacity: 1;
	}

	img {
		position: absolute;
		right: 10%;
		margin-top: 2.5%;

		max-width: 50%;
		height: auto;

		opacity: 0;
		pointer-events: none;

		border-radius: var(--border-radius);
		transition: all 0.35s;
		transition-delay: 0.2s;
	}
</style>
