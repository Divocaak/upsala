<script>
	import Navbar from '$lib/Navbar.svelte';
	import Carousel from '$lib/Carousel.svelte';

	export let data;

	let currentObject = {};
	function handleMessage(event) {
		currentObject = event.detail.data;
	}
</script>

<div class="carousel-wrapper">
	<Navbar textColor={currentObject.textColor} transparent={true} />
	<div class="content-wrapper">
		<Carousel objects={data.resultArray} on:change={handleMessage} />
	</div>
</div>

<style>
	.carousel-wrapper {
		position: absolute;
		top: 0;
		left: 0;

		width: 100vw;
		height: 100vh;

		padding: 0;
		margin:0;
	}

	.content-wrapper {

		position: absolute;
		top: 0;
		width: 100%;
		margin: 0;
		padding: 0;
	}
</style>
