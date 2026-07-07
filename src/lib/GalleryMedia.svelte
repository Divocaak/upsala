<script>
	import LazyImage from '$lib/LazyImage.svelte';
	import LottiePlayer from './LottiePlayer.svelte';

	export let media;
</script>

{#if media.endsWith('.mp4') || media.startsWith('data:video/mp4')}
	<video
		class="gallery-image"
		autoplay
		muted
		loop
		preload="metadata"
		playsinline
		disablepictureinpicture
		disableremoteplayback
		controlslist="nodownload nofullscreen noremoteplayback"
	>
		<source src={media} type="video/mp4" />
		Your browser does not support the video tag.
	</video>
{:else if media.endsWith('.json') || media.startsWith('data:application/json')}
	 <LottiePlayer path={media} additionalClasses="gallery-image"/>
{:else}
	<LazyImage path={media} alt="graphics" additionalClasses="gallery-image" />
{/if}

<style>
	:global(.gallery-image) {
		position: relative;
		width: 100%;
		height: auto;
		border-radius: var(--border-radius);
	}
</style>
