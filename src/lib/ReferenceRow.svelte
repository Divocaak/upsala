<script>
	import { blur } from 'svelte/transition';

	export let label, image;

	let showImage = false;
	let cursorX = 0;
	let cursorY = 0;
	let imageOffsetY = 20;
	let imageHeight = 0;

	function handleMouseMove(event) {
		cursorX = event.clientX;
		cursorY = event.clientY;

		imageOffsetY = cursorY > window.innerHeight / 2 ? -imageHeight - 10 : 20;
	}

	const switchImageVisibility = (newVal) => (showImage = newVal);
	const handleImageLoad = (event) => (imageHeight = event.target.offsetHeight);
</script>

<div class="fx-text">
	<div
		on:mouseenter={() => switchImageVisibility(true)}
		on:mouseleave={() => switchImageVisibility(false)}
		on:mousemove={handleMouseMove}
	>
		<p>{label}</p>
	</div>
	{#if showImage}
		<img
			src={image}
			alt="reference Image"
			class="hover-image {showImage ? 'visible' : ''}"
			style="top: calc({cursorY}px + {imageOffsetY}px); left: {cursorX}px;"
			on:load={(event) => handleImageLoad(event)}
			transition:blur
		/>
	{/if}
</div>

<div class="col-text">
	<p>{label}</p>
	<img src={image} alt="reference Image" />
</div>

<style>
	div {
		margin-left: 38px;
	}

	.fx-text,
	.col-text {
		all: unset;
	}

	p {
		width: 50%;

		font-weight: 400;
		font-size: var(--text-32);
		line-height: 170%;

		padding-left: 5px;
		margin: 0;

		transition: all 0.35s;
	}

	div:hover p {
		color: #ffffff;
		background-color: var(--pink);
	}

	.hover-image {
		position: fixed;
		pointer-events: none;
		transition: opacity 0.2s ease;
		opacity: 0;

		border-radius: var(--border-radius);
		width: 50%;
		height: auto;
	}

	.hover-image.visible {
		opacity: 1;
	}

	.col-text {
		display: none;
	}

	.col-text p{
		width: 100%;
		
		padding-left: 0;
		margin-top: 50px;
		
		text-align: center;
	}

	.col-text img{
		width: 100%;
		height: auto;
	}

	@media screen and (max-width: 600px) {
		.fx-text {
			display: none;
		}

		.col-text {
			display: block;
		}
	}
</style>
