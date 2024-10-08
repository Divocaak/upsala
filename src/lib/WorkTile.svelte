<script>
	export let project = null;
	export let arch = false;

	const thumbnail = arch ? '/arch_thumbnail.jpg' : project.thumbnail;
</script>

<a href="/reference/{arch ? 'arch' : project.id}">
	<div class="thumbnail-wrapper">
		<div class="thumbnail" style="background-image: url('{thumbnail}');"></div>
	</div>
	<p>{arch ? 'projekt arch' : project.label}</p>
</a>

<style>
	a {
		all: unset;
		position: relative;
	}

	.thumbnail-wrapper {
		position: relative;
		aspect-ratio: 3/2;

		border-radius: var(--border-radius);
		z-index: 10;

		overflow: hidden;
	}

	.thumbnail {
		position: relative;
		width: 100%;
		height: 100%;

		background-position: center;
		background-repeat: no-repeat;
		background-size: cover;

		transition: all 0.45s ease-in-out;
	}

	a:hover .thumbnail {
		transform: scale(1.05);
	}

	.thumbnail::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;

		border-radius: var(--border-radius);
		background: linear-gradient(
			0deg,
			rgba(255, 103, 194, 1) 0%,
			rgba(255, 255, 255, 0) 50%,
			rgba(255, 255, 255, 0) 100%
		);
		opacity: 0;

		transition: all 0.45s;
	}

	a:hover .thumbnail::before {
		opacity: 0.35;
	}

	p {
		position: relative;
		margin: 0;
		padding-top: 5px;

		font-size: var(--text-20);

		transition: all 0.45s;

		text-transform: uppercase;
	}

	a:hover p {
		color: var(--pink);
	}
</style>
