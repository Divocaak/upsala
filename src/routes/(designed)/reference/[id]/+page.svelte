<script>
	import LeadContainer from '$lib/containers/LeadContainer.svelte';
	import StrikeThroughText from '$lib/StrikeThroughText.svelte';
	import WorkTile from '$lib/workTiles/WorkTile.svelte';
	import WorkWrapper from '$lib/workTiles/WorkWrapper.svelte';
	import LazyImage from '$lib/LazyImage.svelte';
	import Filter from '$lib/Filter.svelte';

	export let data;

	$: landing = data.project.landingMedia ?? data.project.thumbnail;
</script>

<svelte:head>
	<title>{data.project.label}</title>
</svelte:head>

<LeadContainer title={data.project.label} textSmall={data.project.description} bottomPadding={50}>
	<div slot="r">
		{#if data.project.filters}
			{#each data.project.filters as filter}
				<Filter label={filter} />
			{/each}
		{/if}
	</div>
</LeadContainer>

<div class="images-container" key={data.project.id}>
	{#if landing.endsWith('.mp4')}
		<video
			class="main-image"
			autoplay
			muted
			loop
			preload
			playsinline
			disablepictureinpicture
			disableremoteplayback
		>
			<source src={landing} type="video/mp4" />
			Your browser does not support the video tag.
		</video>
	{:else}
		<LazyImage
			path={landing}
			alt="landing graphics"
			additionalClasses="main-image "
			key="{data.project.id} landing"
		/>
	{/if}
	<div class="gallery">
		{#each data.project.images as image}
			{#if Array.isArray(image)}
				<div class="image-group">
					{#each image as actualImage}
						<div class="image-group-image">
							<LazyImage
								path={actualImage}
								alt=""
								additionalClasses="gallery-image"
								key="{data.project.id} img"
							/>
						</div>
					{/each}
				</div>
			{:else}
				<LazyImage
					path={image}
					alt=""
					additionalClasses="gallery-image"
					key="{data.project.id} img"
				/>
			{/if}
		{/each}
	</div>
</div>

<StrikeThroughText label="reference" />
<WorkWrapper>
	{#each data.references as project}
		<WorkTile {project} />
	{/each}
</WorkWrapper>

<style>
	.images-container {
		position: relative;
		padding: 0 35px;
	}

	:global(.main-image) {
		position: relative;
		width: 100%;
		height: auto;
		border-radius: var(--border-radius);
	}

	* {
		box-sizing: border-box;
	}

	.gallery {
		padding: 5.787vw 5.787vw;
	}

	:global(.gallery-image) {
		width: 100%;
		height: auto;
		margin-bottom: 30px;
		border-radius: var(--border-radius);
	}

	.image-group {
		width: 100%;

		display: flex !important;
		flex-wrap: wrap;
		align-items: center;
		justify-content: center;
	}

	.image-group-image {
		flex: 50%;
		max-width: calc(50% - 15px);
	}

	.image-group-image:first-of-type {
		margin-right: 15px;
	}

	.image-group-image:last-of-type {
		margin-left: 15px;
	}

	@media screen and (max-width: 900px) {
		.image-group-image {
			flex: 100%;
			max-width: 100%;
		}

		.image-group-image:first-of-type {
			margin-right: 0;
		}

		.image-group-image:last-of-type {
			margin-left: 0;
		}
	}
</style>
