<script>
	import Navbar from '$lib/Navbar.svelte';
	import Footer from '$lib/Footer.svelte';

	export let text, description;
	export let txtColor = '#000000';
	export let selectedColor = '#ffffff';
	export let availableColor = '#404040';

    let activeIndex = 0;
	function changeColor(newColor) {
		txtColor = newColor;
	}
</script>

<div class="background-wrapper" style="background-image: url('/_placeholders/3.jpg')">
	<Navbar textColor={txtColor} />
	<div class="content-wrapper">
		<h1 style="color: {txtColor}">
			{text}<br />{description}
		</h1>
		<div class="dots-wrapper" style="--available-color:{availableColor}">
			<button on:click={() => changeColor('#ff0000')} class="dot"></button>
			<button on:click={() => changeColor('#ffff00')} class="dot"></button>
			<button on:click={() => changeColor('#ff00ff')} class="dot"></button>
		</div>
	</div>
	<Footer textColor={txtColor} />
</div>

<style>
	.background-wrapper {
		position: relative;
		top: 0;
		left: 0;
		width: 100vw;
		height: 100vh;
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
