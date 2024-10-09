<script>
	import { onMount, createEventDispatcher } from 'svelte';
	import { goto } from '$app/navigation';

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
			Math.abs(event.clientX - startX) < dragThreshold &&
			Math.abs(event.clientY - startY) < dragThreshold
		) {
			goto(`/reference/${objects[activeIndex].id}`);
		} else {
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

	function isDotActive(activeIndex, dotIndex) {
		if (activeIndex < 0) activeIndex = objects.length + activeIndex;
		return (
			activeIndex >= dotIndex * currentPerPage &&
			activeIndex < dotIndex * currentPerPage + currentPerPage
		);
	}

	const nextSlideIndex = () => (activeIndex + 1) % objects.length;
</script>

<div class="carousel">
	{#each objects as object, i}
		<div
			class="carousel-slide {i === activeIndex ? 'active' : ''}"
			on:pointerdown={handlePointerDown}
			on:pointerup={handlePointerUp}
		>
			<div class="background-wrapper" style="background-image: url('{object.homepage.image}')" />
			<div class="content">
				<h1 style="color: {object.homepage.textColor}">
					{object.homepage.text}<br />{object.homepage.description}
				</h1>
			</div>
		</div>
	{/each}
	<div class="dots-wrapper" style="--available-color:{objects[activeIndex].homepage.textColor};">
		{#each { length: objects.length } as _, i}
			<button
				on:click={() => go(i * currentPerPage)}
				class="hoverable dot {isDotActive(activeIndex, i) ? 'active' : ''}"
			></button>
		{/each}
	</div>
</div>

<style>
	.carousel {
		position: relative;
		width: 100%;
		height: 100vh;
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
	}

	.carousel-slide.active {
		opacity: 1;
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

	.dots-wrapper {
		position: absolute;
		bottom: 3.5%;

		width: 100%;

		display: flex;
		align-items: center;
		flex-direction: row;
		justify-content: center;

		margin: 10px 0;
		padding: 0 35px;

		box-sizing: border-box;
	}

	.dot {
		all: unset;

		display: inline-block;
		height: 25px;
		width: 25px;

		margin: 0 5px;

		background-color: var(--available-color);
		opacity: 0.6;
		border-radius: 50%;

		transition: all 0.35s;
	}

	.dot.active {
		background-color: #ffffff;
		opacity: 1;
	}

	.dot:hover {
		background-color: var(--pink);
	}

	.content {
		position: absolute;
		bottom: 0;

		padding: 0 35px;

		box-sizing: border-box;

		width: 45%;
	}

	h1 {
		font-size: 40px;
		text-transform: uppercase;
	}

	@media screen and (max-width: 600px) {
		.content {
			bottom: 7.5%;
			width: 100%;
		}
	}
</style>
