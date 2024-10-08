<script>
	export let heading, text, mediaPath;
</script>

<div class="texts-wrapper">
	<p>{heading}</p>
	<p>{text}</p>
</div>
<div class="img-wrapper">
	<video
		class="value-image"
		autoplay
		muted
		loop
		preload
		playsinline
		disablepictureinpicture
		disableremoteplayback
	>
		<source src={mediaPath} type="video/mp4" />
		Your browser does not support the video tag.
	</video>
</div>

<style>
	.texts-wrapper {
		position: relative;
		width: calc(100% - 104px);

		display: flex;
		flex-direction: column;
		align-items: center;

		padding: 35px 52px;
	}

	p:first-of-type {
		width: 100%;
		font-size: var(--text-36);
	}

	p:last-of-type {
		width: 100%;
		font-size: var(--text-20);
		white-space: pre-line;
	}

	.img-wrapper {
		width: 50%;
	}

	.value-image {
		width: 100%;
		height: 100%;
	}
</style>
