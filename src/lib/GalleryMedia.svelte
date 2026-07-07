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
	<div class="gallery-image">
		<!-- NOTE https://github.com/dealfonso/simplelottieplayer -->
		<simplelottie url={media} autosize="false" loop="true" repeat-count="0" autoplay="true">
		</simplelottie>
	</div>
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
</style>
