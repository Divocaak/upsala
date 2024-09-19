<script>
	export let heading, text, mediaPath, mediaAlt;
	export let borderRight = true;
</script>

<div class="item" class:borderRight>
	<div class="texts-wrapper">
		<p>{heading}</p>
		<p>{text}</p>
	</div>
	<div class="img-wrapper">
		<video class="value-image" autoplay muted loop preload playsinline disablepictureinpicture disableremoteplayback>
			<source src={mediaPath} type="video/mp4" />
			Your browser does not support the video tag.
		</video>
	</div>
</div>

<style>
	.item {
		position: relative;
		
		display: flex;
		flex-direction:column;
		align-items: center;
		justify-content: space-between;
		
		flex: 1 1 calc(25% - 32px);
		box-sizing: border-box;
	}

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
		font-weight: 400;
		font-size: var(--text-36);
		line-height: 138%;
	}

	p:last-of-type {
		width: 100%;
		font-weight: 400;
		font-size: var(--text-20);
		line-height: 170%;
		white-space: pre-line;
	}

	.borderRight {
		border-right: 1px solid black;
	}

	.img-wrapper{
		width: 50%;
	}

	.value-image {
		width: 100%;
		height: 100%;
	}

	@media (max-width: 991px) and (min-width: 600px) {
		.item {
			flex: 1 1 calc(50% - 32px);
		}
	}

	@media (max-width: 599px) {
		.item {
			flex: 1 1 calc(100% - 32px);
		}
	}
</style>
