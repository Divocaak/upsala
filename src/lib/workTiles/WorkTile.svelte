<script>
	import { fade } from 'svelte/transition';

	export let project = null;
	export let arch = false;
	export let archThumbnail = null;

	$: headingText = arch ? 'Projekt ARCH' : project.label;
	$: path = arch ? 'arch' : project.id;
	$: thumbnail = arch ? archThumbnail : project.thumbnail;
</script>

<a href="/reference/{path}" transition:fade>
	<div class="thumbnail-wrapper">
		{#if thumbnail.endsWith('.mp4')}
			<video
				class="thumbnail-vid"
				autoplay
				muted
				loop
				preload
				playsinline
				disablepictureinpicture
				disableremoteplayback
			>
				<source src={thumbnail} type="video/mp4" />
				Your browser does not support the video tag.
			</video>
		{:else}
			<div class="thumbnail" style="background-image: url('{thumbnail}');"></div>
		{/if}
	</div>
	<p>{headingText}</p>
</a>

<style>
	a {
		all: unset;
		position: relative;
	}

	a:hover {
		cursor: pointer;
	}

	.thumbnail-wrapper {
		position: relative;
		aspect-ratio: 3/2;

		border-radius: var(--border-radius);
		z-index: 10;

		overflow: hidden;
	}

	.thumbnail-vid {
		position: absolute;
		top: 50%;
		left: 50%;
		width: 100%;
		height: 100%;
		object-fit: cover;
		transform: translate(-50%, -50%);

		transition: all 0.45s ease-in-out;
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

	a:hover .thumbnail-vid {
		transform: translate(-50%, -50%) scale(1.05);
	}

	p {
		width: 100%;

		padding-top: 10px;
		margin: 0;

		font-size: var(--text-32);
		font-weight: 300;

		transition: all 0.45s;

		padding-bottom: var(--general-px);
	}

	a:hover p {
		color: var(--pink);
	}
</style>
