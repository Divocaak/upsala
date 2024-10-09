<script>
	import HalfsLayout from '$lib/containers/HalfsLayout.svelte';

	export let title;
	export let imgPath = null;
	export let vidPath = null;
</script>

<div class="wrapper">
	<h2>{title}</h2>
	<HalfsLayout>
		<div slot="l" class="media">
			{#if imgPath}
				<img src={imgPath} />
			{/if}
			{#if vidPath}
				<video
					class="value-image"
					autoplay
					muted
					loop
					preload
					playsinline
					disablepictureinpicture
					disableremoteplayback
				>
					<source src={vidPath} type="video/mp4" />
					Your browser does not support the video tag.
				</video>
			{/if}
		</div>
		<div slot="r">
			<slot></slot>
		</div>
	</HalfsLayout>
</div>

<style>
	.wrapper {
		position: relative;
		width: calc(100% - (38px * 2));
		min-height: 50vh;
		height: auto;

		margin: 0 38px;
		padding-bottom: 100px;

		border-top: 1px solid var(--black);
	}

	h2 {
		text-transform: uppercase;
	}

	img,
	video {
		width: 60%;
		height: auto;
	}
</style>
