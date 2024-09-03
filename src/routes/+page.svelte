<script>
	import Navbar from '$lib/Navbar.svelte';
	import Footer from '$lib/Footer.svelte';
	import { homepage } from '/dynamic/content.json';

	let activeIndex = 0;
	let selectedItem = homepage[activeIndex];

	const changeItem = (newIndex) => (selectedItem = homepage[newIndex]);
</script>

<div
	class="background-wrapper"
	style="background-image: url('/dynamic/imgs/homepage/{selectedItem.imgPath}')"
>
	<Navbar textColor={selectedItem.textColor} transparent={true} />
	<div class="bottom-section">

		<div class="content-wrapper">
			<div class="content">
				<h1 style="color: {selectedItem.textColor}">
					{selectedItem.text}<br />{selectedItem.description}
				</h1>
			</div>
			<div class="content dots-wrapper" style="--available-color:{selectedItem.availableColor}">
				<!-- TODO selectedColor -->
				<button on:click={() => changeItem(0)} class="dot"></button>
				<button on:click={() => changeItem(1)} class="dot"></button>
				<button on:click={() => changeItem(2)} class="dot"></button>
			</div>
		</div>
	</div>
</div>

<style>
	.background-wrapper {
		position: relative;
		top: 0;
		left: 0;

		width: 100vw;
		height: 100vh;

		background-position: center;
		background-repeat: no-repeat;
		background-size: cover;

		transition: all 0.35s;
	}

	.bottom-section{
		position: absolute;
		width: 100%;
		bottom: 0;
	}

	.content-wrapper {
		position: relative;
		width: 100%;

		display: flex;
		flex-direction: row;
		align-items: end;
		justify-content: space-between;
	}

	.content {
		padding: 0 35px;

		box-sizing: border-box;
	}

	.content h1 {
		font-weight: 400;
		font-size: 40px;
		line-height: 138%;
	}

	.content:last-of-type {
		margin: 35px 0;
		align-items: center;
		display: flex;
		flex-direction: row;
		justify-content: end;
	}

	/* TODO cursor */
	.dot {
		all: unset;

		display: inline-block;
		height: 25px;
		width: 25px;

		background-color: var(--available-color);
		border-radius: 50%;

		transition: all 0.35s;
	}

	.dot:nth-of-type(2) {
		margin: 0 10px;
	}

	.dot:hover {
		background-color: var(--pink);
	}

	@media (max-width: 599px) {
		.content-wrapper{
			flex-direction: column;
			align-items: start;
			justify-content: end;
		}

		.content{
			min-height: 8%;
			margin:0;
		}
	}
</style>
