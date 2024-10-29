<script>
	import { fade } from 'svelte/transition';

	export let project = null;
	export let arch = false;

	$: headingText = arch ? 'Projekt ARCH' : project.label;
	$: path = arch ? 'arch' : project.id;
	$: thumbnail = arch ? '/arch_thumbnail.jpg' : project.thumbnail;
</script>

<a href="/reference/{path}" transition:fade>
	<div class="thumbnail-wrapper">
		<div class="thumbnail" style="background-image: url('{thumbnail}');"></div>
	</div>
	<div class="texts-wrapper">
		<p>{headingText}</p>
	</div>
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

	.texts-wrapper {
		position: relative;
		width: 100%;
	}

	.texts-wrapper p:first-of-type {
		width: 100%;

		padding-top: 5px;

		font-size: var(--text-32);
		font-weight: 300;

		transition: all 0.45s;
	}

	.texts-wrapper p:nth-of-type(2) {
		font-size: var(--text-20);

		padding-top: 10%;
		padding-right: 30%;
	}

	a:hover p:first-of-type {
		color: var(--pink);
	}
</style>
