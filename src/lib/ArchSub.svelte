<script>
	import Siema from 'siema';
	import { onMount, createEventDispatcher } from 'svelte';

	export let object;

	let svgIcon = loadSVG(object.icon);

	const perPage = 1;
	const autoplay = 0;
	const startIndex = 0;
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
			perPage: perPage,
			loop: true,
			duration: 200,
			easing: 'ease-out',
			startIndex: startIndex,
			draggable: true,
			multipleDrag: true,
			threshold: 20,
			rtl: false,
			onChange: handleChange
		});

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

	export function go(index) {
		controller.goTo(index);
	}

	function handleChange(event) {
		currentIndex = controller.currentSlide;
		dispatch('change', {
			currentSlide: controller.currentSlide,
			slideCount: controller.innerElements.length
		});
	}

	async function loadSVG(url) {
		const response = await fetch(url);
		const svgText = await response.text();
		return svgText;
	}
</script>

<div class="wrapper">
	<div class="content-wrapper">
		<div class="content-holder">
			<p>{object.label}</p>
			<p>{object.text}</p>
			{#await svgIcon then icon}
				{@html icon}
			{/await}
		</div>
	</div>
	<div class="carousel-wrapper">
		<div class="carousel">
			<div class="slides" bind:this={siema}>
				{#each object.images as imgPath}
					<div class="carousel-img" style="background-image: url('{imgPath}');"></div>
				{/each}
			</div>
		</div>
	</div>
</div>
<div class="dots-wrapper">
	{#each { length: totalDots } as _, i}
		<button
			on:click={() => go(i * currentPerPage)}
			class="hoverable dot {isDotActive(currentIndex, i) ? 'active' : ''}"
		></button>
	{/each}
</div>

<style>
	:root {
		--height: 510px;
	}

	.wrapper {
		position: relative;
		width: calc(100% - 70px);
		height: var(--height);

		padding-top: 100px;
		margin: 0 35px;
	}

	.content-wrapper {
		position: absolute;
		width: 35%;
		height: 100%;

		left: 0;
	}

	.content-holder {
		position: relative;
		width: 40%;
		height: 100%;

		padding-top: 10%;

		display: flex;
		flex-direction: column;
		justify-content: start;
	}

	.content-holder p:first-of-type {
		font-weight: 600;
		font-size: var(--text-36);
		line-height: 138%;
		text-transform: uppercase;
	}
	.content-holder p:last-of-type {
		font-weight: 400;
		font-size: var(--text-20);
		line-height: 138%;
	}
	:global(.content-holder svg) {
		position: relative;
		width: 100%;
		height: auto;
	}

	.carousel {
		position: relative;
		width: 100%;
		
		justify-content: center;
		align-items: center;

		border-radius: var(--border-radius);
		overflow: hidden;
	}

	.carousel-wrapper .carousel-img {
		position: relative;
		width: 100%;
		height: var(--height);

		background-position: center;
		background-repeat: none;
		background-size: cover;
	}

	.carousel-wrapper {
		position: absolute;
		width: 65%;
		height: 100%;

		right: 0;
	}

	@media screen and (max-width: 1000px) {
		.content-holder {
			width: 30%;

			padding: 0;
			margin: auto;
		}

		.wrapper {
			height: auto;
		}

		.content-wrapper,
		.carousel-wrapper {
			position: relative;
			width: 100%;
		}
	}

	.dots-wrapper {
		position: relative;
		margin-top: 10px;

		width: 100%;

		display: flex;
		align-items: center;
		flex-direction: row;
		justify-content: end;

		padding: 0 35px;

		box-sizing: border-box;
	}

	.dot {
		all: unset;

		display: inline-block;
		height: 25px;
		width: 25px;

		background-color: #d9d9d9;
		opacity: 0.6;
		border-radius: 50%;

		transition: all 0.35s;

		margin: 0 5px;
	}

	.dot.active {
		background-color: var(--pink);
		opacity: 1;
	}

	.dot:hover {
		background-color: var(--pink);
		opacity: 0.6;
	}
</style>
