<script>
	import { onMount, createEventDispatcher } from 'svelte';

	export let objects;

	const dispatch = createEventDispatcher();
	const dragThreshold = 5;
	let startX, startY;

	let activeIndex = 0;
	let nextIndex = (activeIndex + 1) % objects.length;
	const currentPerPage = 1;

	let autoplayInterval;
	const delay = 6000;

	onMount(() => {
		dispatch('change', { data: objects[activeIndex].homepage });

		startAutoplay();
		return () => {
			stopAutoplay();
		};
	});

	function handlePointerDown(event) {
		stopAutoplay();
		startX = event.clientX;
		startY = event.clientY;
	}

	function handlePointerUp(event) {
		if (
			Math.abs(event.clientX - startX) >= dragThreshold ||
			Math.abs(event.clientY - startY) >= dragThreshold
		) {
			const nextIndex =
				event.clientX < startX
					? nextSlideIndex()
					: (activeIndex - 1 + objects.length) % objects.length;
			go(nextIndex);
		}
	}

	function go(index) {
		userInteracted();
		activeIndex = index;
		nextIndex = (activeIndex + 1) % objects.length;
		dispatch('change', { data: objects[activeIndex].homepage });
	}

	const startAutoplay = () => {
		autoplayInterval = setInterval(() => {
			go(nextSlideIndex());
		}, delay);
	};

	const stopAutoplay = () => {
		clearInterval(autoplayInterval);
	};

	const userInteracted = () => {
		stopAutoplay();
		startAutoplay();
	};

	const nextSlideIndex = () => (activeIndex + 1) % objects.length;
</script>

<div class="carousel">
	{#each objects as object, i}
		<div
			class="carousel-slide {i === activeIndex ? 'active' : ''}"
			on:pointerdown={handlePointerDown}
			on:pointerup={handlePointerUp}
		>
			<div class="background-wrapper" style="background-image: url({object.homepage.image})"></div>
			<div class="content">
				<a style="color: {object.homepage.textColor}" href="/reference/{object.id}">
					{object.homepage.text}<br />{object.homepage.description}
				</a>
			</div>
		</div>
	{/each}
</div>

<style>
	.carousel {
		position: relative;
		width: 100%;
		height: 100%;
		justify-content: center;
		align-items: center;
		background-color: black;
	}

	.carousel-slide {
		position: absolute;
		top: 0;
		left: 0;
		opacity: 0;
		transition: opacity 0.5s ease;
		pointer-events: none;
	}

	.carousel-slide.active {
		opacity: 1;
		pointer-events: all;
	}

	.background-wrapper {
		position: relative;
		width: 100vw;
		height: 100vh;

		background-position: center;
		background-repeat: no-repeat;
		background-size: cover;

		transition: all 0.35s;
	}

	.carousel-slide,
	.background-wrapper {
		height: -webkit-fill-available;
		min-height: -webkit-fill-available;
	}

	.content {
		position: absolute;
		bottom: 0;

		padding: 0 var(--general-px);

		box-sizing: border-box;

		width: 45%;
	}

	.content a {
		font-size: 40px;
		transition: all 0.35s;

		margin: 0.67em 0;
		display: block;
	}

	.content a:hover {
		color: var(--pink) !important;
		cursor: pointer;
	}

	@media screen and (max-width: 600px) {
		.content {
			bottom: 7.5%;
			width: 100%;
		}
	}
</style>
