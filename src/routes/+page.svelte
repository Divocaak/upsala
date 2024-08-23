<script>
	import Navbar from '$lib/Navbar.svelte';
	import Footer from '$lib/Footer.svelte';
	import { homepage } from '/dynamic/content.json';

	let activeIndex = 0;
	let selectedItem = homepage[activeIndex];

	const changeItem = (newIndex) => selectedItem = homepage[newIndex];
</script>

<div class="background-wrapper" style="background-image: url('/dynamic/imgs/homepage/{selectedItem.imgPath}')">
	<Navbar textColor={selectedItem.textColor} transparent={true}/>
	<div class="content-wrapper">
		<h1 style="color: {selectedItem.textColor}">
			{selectedItem.text}<br />{selectedItem.description}
		</h1>
		<div class="dots-wrapper" style="--available-color:{selectedItem.availableColor}">
			<!-- TODO selectedColor -->
			<button on:click={() => changeItem(0)} class="dot"></button>
			<button on:click={() => changeItem(1)} class="dot"></button>
			<button on:click={() => changeItem(2)} class="dot"></button>
		</div>
	</div>
	<Footer textColor={selectedItem.textColor} />
</div>

<style>
	.background-wrapper {
		position: relative;
		top: 0;
		left: 0;
		width: 100vw;
		height: 100vh;
		transition: all .35s;
	}

	.content-wrapper {
		position: relative;
		width: 100%;
		height: 80%;
	}

	.content-wrapper h1 {
		position: absolute;
		bottom: 0;
		left: 35px;
		font-weight: 400;
		font-size: 40px;
		line-height: 138%;
	}

	.dots-wrapper {
		position: absolute;
		bottom: 50px;
		right: 35px;
	}

	/* TODO cursor */
	.dot {
		all: unset;
		height: 25px;
		width: 25px;
		background-color: var(--available-color);
		border-radius: 50%;
		display: inline-block;
		transition: all 0.35s;
	}

	.dot:nth-of-type(2) {
		margin: 0 10px;
	}

	.dot:hover {
		background-color: var(--pink);
	}
</style>
