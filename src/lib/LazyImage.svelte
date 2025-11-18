<script>
	import { onMount } from 'svelte';
	import { FxReveal as Img } from '@zerodevx/svelte-img';

	export let path;
	export let alt = '';
	export let wrapperClasses = '';
	export let additionalClasses = '';

	$: src = {
		img: { src: path, w: 1920, h: 1080 },
		sources: { webp: path, jpeg: path }
	};

	let ref, loaded;
	onMount(() => {
		if (ref.complete) loaded = true;
	});
</script>

<div class="wrap {wrapperClasses}">
	<Img {src} class="my-img {additionalClasses}" {alt} bind:ref on:load={() => (loaded = true)} />
	<div class="blur" class:loaded></div>
</div>

<style>
	:globa(.my-img) {
		--reveal-transform: scale(1.02);
		--reveal-transition: opacity 1s ease-in, transform 0.8s ease-out;
		--reveal-filter: blur(20px);
	}

	.wrap {
		position: relative;
		overflow: hidden;
	}
	.blur {
		position: absolute;
		inset: 0;
		backdrop-filter: blur(20px);
		pointer-events: none;
	}
	.loaded {
		display: none;
	}
</style>
