<script>
	export let id = null;
	export let project = null;
	export let arch = false;

	const thumbnail = `/dynamic/imgs/work/${arch ? "arch/thumbnail.jpg" : `${id}/${project.thumbnail}`}`;
</script>

<a href="/work/{arch ? "arch" : id}" class:arch>
	<div class="thumbnail" style="background-image: url('{thumbnail}');"></div>
	<p>{arch ? "projekt arch" : project.label}</p>
</a>

<style>
	a {
		all: unset;
		position: relative;
	}

	.arch {
		grid-column-start: span 2;
	}

	.arch > .thumbnail {
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
		/* mix-blend-mode: color; */
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
