<script>
	import Siema from 'siema';
	import { onMount, createEventDispatcher } from 'svelte';
	import StrikeThroughText from '$lib/StrikeThroughText.svelte';

	export let object;
	export let topStrike = false;

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

	function handleChange() {
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

{#if topStrike}
	<StrikeThroughText />
{/if}
<div class="wrapper">
	<div class="content-wrapper">
		<div class="icon-wrapper">
			{#await svgIcon then icon}
				{@html icon}
			{/await}
		</div>
		<div class="texts-wrapper">
			<p>{object.label}</p>
			<p>{object.text}</p>
		</div>
	</div>
	<div class="carousel-wrapper">
		<div class="carousel">
			<div class="slides" bind:this={siema}>
				{#each object.images as imgPath}
					<div class="carousel-img" style="background-image: url('{imgPath}');"></div>
				{/each}
			</div>
			<div class="dots-wrapper">
				{#each { length: totalDots } as _, i}
					<button
						on:click={() => go(i * currentPerPage)}
						class="hoverable dot {isDotActive(currentIndex, i) ? 'active' : ''}">
					</button>
				{/each}
			</div>
		</div>
	</div>
</div>

<style>
	.wrapper {
		position: relative;
		width: calc(100% - var(--general-px) * 2);

		padding: 50px 0px 50px 0px;
		margin: 0 var(--general-px);

		display: flex;
		flex-direction: row;
		justify-content: start;
		align-items: end;
	}

	.content-wrapper {
		width: 50%;
		height: 50%;

		display: flex;
		flex-direction: row;
		justify-content: start;
		align-items: end;
	}

	.icon-wrapper {
		width: 33%;
		height: 100%;

		display: flex;
		flex-direction: row;
		justify-content: start;
		align-items: end;
	}

	:global(.icon-wrapper svg) {
		width: 65%;
		height: auto;
	}

	.content-wrapper p:first-of-type {
		font-size: var(--text-36);
		text-transform: uppercase;
	}

	.content-wrapper p:last-of-type {
		font-size: var(--text-20);
	}

	.texts-wrapper {
		width: 77%;
		height: 100%;

		display: flex;
		flex-direction: column;
		justify-content: end;
	}

	.carousel-wrapper {
		width: 50%;
		height: 100%;
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
		aspect-ratio: 3/2;

		background-position: center;
		background-repeat: none;
		background-size: cover;
	}

	@media screen and (max-width: 1200px) {
		.wrapper {
			flex-direction: column;
		}

		.content-wrapper,
		.carousel-wrapper {
			width: 100%;
		}
	}

	.dots-wrapper {
		position: absolute;
		bottom: 10px;

		width: 100%;

		display: flex;
		align-items: center;
		flex-direction: row;
		justify-content: end;

		padding: 0 var(--general-px);

		box-sizing: border-box;
	}

	.dot {
		all: unset;

		display: inline-block;
		height: 25px;
		width: 25px;

		background-color: var(--light-grey);
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
