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

	let modalVisible = false;

	const toggleModal = () => (modalVisible = !modalVisible);
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
			alt="client graphics"
			class="hover-image {showImage ? 'visible' : ''}"
			style="top: calc({cursorY}px + {imageOffsetY}px); left: calc({cursorX}px - {imageWidth +
				10}px);"
			on:load={(event) => handleImageLoad(event)}
			transition:blur
		/>
	{/if}
</div>

<div class="modal-text">
	<button on:click={toggleModal}>{label}</button>
</div>
{#if modalVisible}
	<button class="modal-window" transition:blur on:click={toggleModal}>
		<img src={image} alt="client gpx" />
	</button>
{/if}

<style>
	.fx-text,
	.modal-text,
	.modal-window,
	.modal-text button {
		all: unset;
	}

	p {
		font-size: var(--text-32);
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
		width: auto;
		height: auto;
		max-width: 450px;
		max-height: 450px;

		opacity: 0;
		pointer-events: none;

		border-radius: var(--border-radius);

		transition: opacity 0.65s ease;
	}

	.hover-image.visible {
		opacity: 1;
	}

	.modal-text {
		width: 100%;
		height: auto;
		display: inline-block;
		display: none;
	}

	.modal-text button {
		font-family: 'SuisseIntl';
		font-size: var(--text-32);
		line-height: 150%;
		letter-spacing: 0.02em;
		font-weight: 300;
	}

	.modal-window {
		position: fixed;
		top: 0;
		left: 0;

		width: 100vw;
		height: 100vh;

		background-color: rgba(0, 0, 0, 0.65);

		z-index: 999;

		display: flex;
		align-items: center;
	}

	.modal-window img {
		width: 70%;
		height: auto;
		margin: auto;
	}

	@media screen and (max-width: 600px) {
		.fx-text {
			display: none;
		}

		.modal-text {
			display: block;
		}
	}
</style>
