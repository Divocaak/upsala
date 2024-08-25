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
		<img src={mediaPath} alt={mediaAlt} />
	</div>
</div>

<style>
	div {
		position: relative;
		width: 100%;
		padding: 35px 52px;

		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.texts-wrapper {
		position: relative;
		width: 100%;
	}

	p:first-of-type {
		width: 100%;
		font-weight: 400;
		font-size: var(--text-32);
		line-height: 138%;
	}

	p:last-of-type {
		font-weight: 400;
		font-size: var(--text-20);
		line-height: 138%;
	}

	.borderRight {
		border-right: 1px solid black;
	}

	.img-wrapper {
		margin-top: auto;
	}

	img {
		margin: auto;

		width: 203px;
		height: 203px;

		border-radius: 70px;
	}

	.item {
		box-sizing: border-box;
		flex: 1 1 calc(25% - 32px);
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
