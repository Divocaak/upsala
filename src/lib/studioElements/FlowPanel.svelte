<script>
	import HalfsLayout from '$lib/containers/HalfsLayout.svelte';

	export let imgSrc;
	export let number;
	export let lead;
	export let text;
	export let isMiddle = false;

	const digits = number.split('');
</script>

<div class="main-wrapper" class:y-margin={isMiddle}>
	<HalfsLayout leftWidth="50" rightWidth="50" gap="2">
		<div class="image-panel" slot="l">
			<div class="number-wrapper">
				<span class="digit first">{digits[0]}</span>
				<div class="image-wrapper">
					<img src={imgSrc} alt="flow" />
					<span class="digit second">{digits[1]}</span>
				</div>
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

	.y-margin{
		margin: calc(3*var(--general-px)) 0;
	}

	.image-panel {
		display: flex;
		align-items: center;
		position: relative;
	}

	.number-wrapper {
		display: flex;
		align-items: center;
		position: relative;
		width: 100%;
	}

	.image-wrapper {
		position: relative;
		aspect-ratio: 1/1;
		width: 60%;
		overflow: hidden;
	}

	.image-wrapper img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		display: block;
	}

	.digit {
		font-size: clamp(120px, 14vw, 300px);
		white-space: nowrap;

		font-family: 'SuisseIntl', sans-serif;
		letter-spacing: 0.5px;
		color: var(--black);

		font-weight: 400;
		font-size: 300px;
		z-index: 1;
	}

	.digit.first {
		z-index: 2;
	}

	.digit.second {
		position: absolute;
		top: 50%;
		left: 5%;
		transform: translateY(-50%);
		z-index: 3;
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
</style>
