<script>
	import HalfsLayout from '$lib/containers/HalfsLayout.svelte';

	export let title;
	export let imgPath = null;
	export let vidPath = null;
</script>

<div class="wrapper">
	<h2>{title}</h2>
	<HalfsLayout>
		<div slot="l">
			{#if imgPath}
				<img src={imgPath} alt="container gpx" />
			{/if}
			{#if vidPath}
				<video
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
		width: calc(100% - (var(--general-px) * 2));
		min-height: 50vh;
		height: auto;

		margin: 0 var(--general-px);
		padding-bottom: 100px;

		border-top: 1px solid var(--black);
	}

	img {
		width: 60%;
		height: auto;
	}

	video {
		width: 40%;
		height: auto;
	}

	@media screen and (max-width: 900px) {
		img, video {
			width: 100%;
			height: auto;
			padding-bottom: var(--general-px);
		}
	}
</style>
