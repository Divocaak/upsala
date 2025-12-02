<script>
	import HalfsLayout from '$lib/containers/HalfsLayout.svelte';

	export let imgSrc;
	export let number;
	export let lead;
	export let text;
	export let isMiddle = false;
</script>

<div class="main-wrapper" class:y-margin={isMiddle}>
	<HalfsLayout leftWidth="50" rightWidth="50" gap="2">
		<div class="image-panel" slot="l">
			<div class="image-wrapper">
				<img src={imgSrc} alt="flow" />
				<p class="digit">{number}</p>
			</div>
		</div>
		<div class="text-panel" slot="r">
			<p>{lead}</p>
			<p>{text}</p>
		</div>
	</HalfsLayout>
</div>

<style>
	.main-wrapper {
		padding: 0 var(--general-px);
		width: calc(100% - 2 * var(--general-px));
	}

	.y-margin {
		margin: calc(3 * var(--general-px)) 0;
	}

	.image-panel {
		display: flex;
		align-items: start;
		position: relative;

		/* min-height: 120%; */
	}

	.image-wrapper {
		position: relative;
		aspect-ratio: 1/1;
		width: 60%;
		/* overflow: hidden; */
	}

	.image-wrapper img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		display: block;
	}

	.digit {
		font-size: clamp(120px, 14vw, 300px);
		font-weight: 400;

		position: absolute;
		bottom: 0;
		right: 0;
		transform: translate(50%, 25%);
		z-index: 3;

		background-color: white;

		padding: 0;
		margin: 0;
		line-height: normal;

		width: 1em;
		text-align: center;
	}

	.text-panel p:first-of-type {
		font-weight: 400;
		font-size: var(--text-48);
		line-height: 150%;
		letter-spacing: 1%;
	}

	.text-panel p:last-of-type {
		font-weight: 300;
		font-size: var(--text-32);
		line-height: 140%;
	}

	@media screen and (max-width: 1200px) {
		.image-wrapper{
			width: 80%;
		}
	}
</style>
