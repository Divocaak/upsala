<script>
	export let label, media, path;
	export let arch = false;
</script>

<a href="{path}" class:arch>
	<div class="thumbnail" style="background-image: url('{media}');"></div>
	<p>{label}</p>
</a>

<style>
	/* TODO cursor */
	a {
		all:unset;
		position: relative;
	}

	.arch {
		grid-column-start: span 2;
	}

	a:hover p {
		top: 95%;
		opacity: 1;
	}

	.thumbnail {
		position: relative;
		width: 100%;
		height: 100%;
		background-position: center;
		background-repeat: no-repeat;
		background-size: cover;
		border-radius: var(--border-radius);
		z-index: 10;
	}

	p {
		position: absolute;
		top: 80%;
		left: 5.73%;

		font-weight: 400;
		font-size: 24px;
		line-height: 138%;

		opacity: 0;
		color: var(--pink);

		transition: all 0.45s;
	}
</style>
