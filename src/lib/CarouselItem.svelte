<script>
	export let homepageItem;
</script>

<div
	class="background-wrapper"
	style="background-image: url('/dynamic/imgs/homepage/{homepageItem.imgPath}')"
>
	<div class="content">
		<h1 style="color: {homepageItem.textColor}">
			{homepageItem.text}<br />{homepageItem.description}
		</h1>
	</div>
</div>

<style>
	.background-wrapper {
		position: relative;
		width: 100vw;
		height: 100vh;

		background-position: center;
		background-repeat: no-repeat;
		background-size: cover;

		transition: all 0.35s;

		cursor: none;
	}

	.content {
		position: absolute;
		bottom: 0;

		padding: 0 35px;

		box-sizing: border-box;
	}

	h1 {
		font-weight: 400;
		font-size: 40px;
		line-height: 138%;
		text-transform: uppercase;
	}

	@media screen and (max-width: 600px) {
		.content {
			bottom: 5%;
		}
	}
</style>
