<script>
	import { blur } from 'svelte/transition';

	export let label, image;

	let showImage = false;
	let cursorX = 0;
	let cursorY = 0;
	let imageOffsetY = 20;
	let imageHeight = 0;
	let imageWidth = 0;

	function handleMouseMove(event) {
		cursorX = event.clientX;
		cursorY = event.clientY;

		imageOffsetY = cursorY > window.innerHeight / 2 ? -imageHeight - 10 : 20;
	}

	const switchImageVisibility = (newVal) => (showImage = newVal);
	const handleImageLoad = (event) => {
		imageHeight = event.target.offsetHeight;
		imageWidth = event.target.offsetWidth;
	};
</script>

<div class="fx-text">
	<p
		on:mouseenter={() => switchImageVisibility(true)}
		on:mouseleave={() => switchImageVisibility(false)}
		on:mousemove={handleMouseMove}
	>
		{label}
	</p>
	{#if showImage}
		<img
			src={image}
			alt="reference Image"
			class="hover-image {showImage ? 'visible' : ''}"
			style="top: calc({cursorY}px + {imageOffsetY}px); left: calc({cursorX}px - {imageWidth +
				10}px);"
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
	.fx-text,
	.col-text {
		all: unset;
	}

	p {
		font-size: var(--text-24);
		line-height: 150%;
		letter-spacing: 0.02em;

		padding-left: 5px;
		margin: 0;

		transition: all 0.35s;
	}

	p:hover {
		color: var(--pink);
	}

	.hover-image {
		position: fixed;
		width: 50%;
		height: auto;

		opacity: 0;
		pointer-events: none;

		border-radius: var(--border-radius);

		transition: opacity 0.65s ease;
	}

	.hover-image.visible {
		opacity: 1;
	}

	.col-text {
		display: none;
	}

	.col-text p {
		width: 100%;

		padding-left: 0;
		margin-top: 50px;

		text-align: center;
	}

	.col-text img {
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
