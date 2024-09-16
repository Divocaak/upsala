<script>
	import Siema from 'siema';
	import { onMount, createEventDispatcher } from 'svelte';

	import CarouselItem from '$lib/CarouselItem.svelte';

	export let objects;

	export let perPage = 1;
	export let loop = true;
	export let autoplay = 6000;
	export let duration = 1000;
	export let easing = 'ease-out';
	export let startIndex = 0;
	export let draggable = true;
	export let multipleDrag = true;
	export let dots = true;
	export let controls = false;
	export let threshold = 20;
	export let rtl = false;

	let currentIndex = startIndex;

	let siema;
	let controller;
	let timer;
	const dispatch = createEventDispatcher();

	$: pips = controller ? controller.innerElements : [];
	$: currentPerPage = controller ? controller.perPage : perPage;
	$: totalDots = controller ? Math.ceil(controller.innerElements.length / currentPerPage) : [];

	onMount(() => {
		controller = new Siema({
			selector: siema,
			perPage: typeof perPage === 'object' ? perPage : Number(perPage),
			loop,
			duration,
			easing,
			startIndex,
			draggable,
			multipleDrag,
			threshold,
			rtl,
			onChange: handleChange
		});

		dispatch('change', { data: objects[currentIndex].homepage });

		if (autoplay) {
			timer = setInterval(right, autoplay);
		}
		return () => {
			autoplay && clearInterval(timer);
			controller.destroy();
		};
	});

	export function isDotActive(currentIndex, dotIndex) {
		if (currentIndex < 0) currentIndex = pips.length + currentIndex;
		return (
			currentIndex >= dotIndex * currentPerPage &&
			currentIndex < dotIndex * currentPerPage + currentPerPage
		);
	}

	export function left() {
		controller.prev();
	}

	export function right() {
		controller.next();
	}

	export function go(index) {
		controller.goTo(index);
	}

	export function pause() {
		clearInterval(timer);
	}

	export function resume() {
		if (autoplay) {
			timer = setInterval(right, autoplay);
		}
	}

	function handleChange(event) {
		resetInterval();
		currentIndex = controller.currentSlide;
		dispatch('change', {
			currentSlide: controller.currentSlide,
			slideCount: controller.innerElements.length,
			data: objects[currentIndex].homepage
		});
	}

	function resetInterval(node, condition) {
		function handleReset(event) {
			pause();
			resume();
		}

		if (condition) {
			node.addEventListener('click', handleReset);
		}

		return {
			destroy() {
				node.removeEventListener('click', handleReset);
			}
		};
	}
</script>

<div class="carousel">
	<div class="slides" bind:this={siema}>
		{#each objects as object}
			<CarouselItem {object} />
		{/each}
	</div>
	<div class="content">
		<h1 style="color: {objects[currentIndex].homepage.textColor}">
			{objects[currentIndex].homepage.text}<br />{objects[currentIndex].homepage.description}
		</h1>
	</div>
	{#if controls}
		<button class="left" on:click={left} use:resetInterval={autoplay} aria-label="left">
			<slot name="left-control"></slot>
		</button>
		<button class="right" on:click={right} use:resetInterval={autoplay} aria-label="right">
			<slot name="right-control"></slot>
		</button>
	{/if}
	{#if dots}
		<div class="dots-wrapper" style="--available-color:{objects[currentIndex].homepage.textColor};">
			{#each { length: totalDots } as _, i}
				<button
					on:click={() => go(i * currentPerPage)}
					class="hoverable dot {isDotActive(currentIndex, i) ? 'active' : ''}"
				></button>
			{/each}
		</div>
	{/if}
</div>

<style>
	.carousel {
		position: relative;
		width: 100%;
		justify-content: center;
		align-items: center;
	}

	button {
		position: absolute;
		width: 40px;
		height: 40px;
		top: 50%;
		z-index: 50;
		margin-top: -20px;
		border: none;
		background-color: transparent;
	}
	button:focus {
		outline: none;
	}

	.left {
		left: 2vw;
	}

	.right {
		right: 2vw;
	}

	.dots-wrapper {
		position: absolute;
		bottom: 0;

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

		background-color: var(--available-color);
		opacity: 0.6;
		border-radius: 50%;

		transition: all 0.35s;
	}

	.dot.active {
		background-color: #ffffff;
		opacity: 1;
	}

	.dot:nth-of-type(2) {
		margin: 0 10px;
	}

	.dot:hover {
		background-color: var(--pink);
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
