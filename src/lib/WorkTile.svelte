<script>
	export let project = null;
	export let arch = false;

	export let heading = null;
	export let text = null;
	export let subPath = null;
	export let subThumbnail = null;

	const archCategory = heading && text && subPath && subThumbnail;

	const headingText = archCategory ? heading : arch ? 'projekt arch' : project.label;
	const path = archCategory ? subPath : arch ? 'arch' : project.id;
	const thumbnail = archCategory ? subThumbnail : arch ? '/arch_thumbnail.jpg' : project.thumbnail;
</script>

<a href="/reference/{path}">
	<div class="thumbnail-wrapper">
		<div class="thumbnail" style="background-image: url('{thumbnail}');"></div>
	</div>
	<div class="texts-wrapper">
		<p>{headingText}</p>
		{#if text}
			<p>{text}</p>
		{/if}
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

		font-size: var(--text-20);

		transition: all 0.45s;

		text-transform: uppercase;
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
