<script>
	export let heading, text, mediaPath, sub;
</script>

<a href="/reference/arch/{sub}" class="container" >
	<div class="image" style="background-image: url('{mediaPath}');"></div>
	<div class="texts-wrapper">
		<p>{heading}</p>
		<p>{text}</p>
	</div>
</a>

<style>
	.container {
		all: unset;

		position: relative;
		width: 100%;

		box-sizing: border-box;
		flex: 1 1 calc(25% - 32px);

		padding: 0 5px;
	}

	.container:hover p:first-of-type {
		color: var(--pink);
	}

	.image {
		position: relative;
		aspect-ratio: 3/2;

		background-position: center;
		background-repeat: no-repeat;
		background-size: cover;

		border-radius: var(--border-radius);
	}

	.image::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;

		z-index: 10;

		border-radius: var(--border-radius);
		background-color: #ff67c2;
		opacity: 0;

		transition: all 0.45s;
	}

	.container:hover .image::before {
		opacity: 0.35;
	}

	.texts-wrapper {
		position: relative;
		width: 100%;
	}

	p:first-of-type {
		width: 100%;

		padding-top: 5px;

		font-size: var(--text-20);

		transition: all 0.45s;

		text-transform: uppercase;
	}

	p:last-of-type {
		font-size: var(--text-20);

		padding-top: 10%;
		padding-right: 30%;
	}

	@media (max-width: 991px) {
		.container {
			flex: 1 1 calc(100% - 32px);
			padding-bottom: 150px;
		}
	}
</style>
