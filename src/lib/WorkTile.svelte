<script>
	export let label, media, path;
	export let arch = false;
</script>

<a href={path} class:arch>
	<div class="thumbnail" style="background-image: url('{media}');"></div>
	<p>{label}</p>
</a>

<style>
	/* TODO cursor */
	a {
		all: unset;
		position: relative;
	}

	.arch {
		grid-column-start: span 2;
	}
	
	.arch > .thumbnail{
		aspect-ratio: 10/3;
		padding: 0;
	}

	.thumbnail {
		position: relative;
		aspect-ratio: 5/3;

		background-position: center;
		background-repeat: no-repeat;
		background-size: cover;

		border-radius: var(--border-radius);
		z-index: 10;
	}

	p {
		position: relative;
		margin: 0;

		font-weight: 300;
		font-size: 24px;
		line-height: 138%;

		transition: all 0.45s;

		text-transform: uppercase;
	}

	a:hover p {
		color: var(--pink);
	}

	@media screen and (max-width: 900px) {
		.arch {
			grid-column-start: span 1;
		}
	}
</style>
