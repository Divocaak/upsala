<script>
	export let project = null;
	export let arch = false;

	const thumbnail = arch ? '/arch_thumbnail.jpg' : project.thumbnail;
</script>

<a href="/reference/{arch ? 'arch' : project.id}">
	<div class="thumbnail" style="background-image: url('{thumbnail}');"></div>
	<p>{arch ? 'projekt arch' : project.label}</p>
</a>

<style>
	a {
		all: unset;
		position: relative;
	}

	.thumbnail {
		position: relative;
		aspect-ratio: 3/2;

		background-position: center;
		background-repeat: no-repeat;
		background-size: cover;

		border-radius: var(--border-radius);
		z-index: 10;
	}

	.thumbnail::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;

		border-radius: var(--border-radius);
		background-color: #ff67c2;
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

		font-weight: 400;
		font-size: var(--text-20);
		line-height: 138%;
		letter-spacing: 0.5px;

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
