<script>
	import LazyImage from '$lib/LazyImage.svelte';

	export let media;
	export let paddingBottom = true;
</script>

{#if media.endsWith('.mp4') || media.startsWith('data:video/mp4')}
	<video
		class="gallery-image"
		autoplay
		muted
		loop
		preload
		playsinline
		disablepictureinpicture
		disableremoteplayback
		class:gallery-image-pb={paddingBottom}
	>
		<source src={media} type="video/mp4" />
		Your browser does not support the video tag.
	</video>
{:else if media.endsWith('.json') || media.startsWith('data:application/json')}
	<dotlottie-wc src={media} speed="1" mode="forward" loop autoplay></dotlottie-wc>
{:else}
	<LazyImage
		path={media}
		alt="graphics"
		additionalClasses="gallery-image {paddingBottom ? 'gallery-image-pb' : ''}"
	/>
{/if}

<style>
	:global(.gallery-image) {
		position: relative;
		width: 100%;
		height: auto;
		border-radius: var(--border-radius);
	}

	:global(.gallery-image-pb) {
		padding-bottom: var(--general-px);
	}

	dotlottie-wc {
		width: 100%;
		height: 100%;
		margin: 0 auto;
		display: block;
	}
</style>
