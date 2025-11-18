<script>
	import GalleryMedia from '$lib/GalleryMedia.svelte';
	import Filter from '$lib/Filter.svelte';

	export let mediaPath;
	export let label;
	export let services;
</script>

<div class="wrapper">
	<div class="media-wrapper">
		<GalleryMedia media={mediaPath} paddingBottom={false}/>
	</div>
	<h1>{@html label}</h1>
	<div class="services-wrapper">
		{#each services as service}
			<Filter label={service} />
		{/each}
	</div>
</div>

<style>
	:root {
		--width: 70%;
	}

	.wrapper {
		display: flex;
		flex-direction: column;
		align-items: center;
		width: var(--width);
	}

	.media-wrapper {
		height: auto;
		width: var(--width);
	}

	.wrapper h1 {
		font-weight: 400;
		font-size: var(--text-48);
		line-height: 130%;
		letter-spacing: 0%;
	}

	.services-wrapper {
		text-align: center;
		position: relative;
		width: var(--width);
	}
</style>
