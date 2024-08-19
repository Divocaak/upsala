<script>
	export let heading, text, mediaPath, mediaAlt;
	export let borderRight = true;
</script>

<div class:borderRight={borderRight}>
	<p>{heading}</p>
	<p>{text}</p>
	<!-- <img src="{mediaPath}" alt={mediaAlt}> -->
</div>

<style>
	div {
		position: relative;
		height: 647px;
		width: 100%;

		padding: 35px 52px;
	}

	p:first-of-type {
		font-weight: 400;
		font-size: 32px;
		line-height: 138%;
	}

	p:last-of-type {
		font-weight: 400;
		font-size: 20px;
		line-height: 138%;
	}

	.borderRight {
		border-right: 1px solid black;
	}
</style>
