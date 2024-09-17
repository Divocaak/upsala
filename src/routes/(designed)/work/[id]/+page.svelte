<script>
	import LeadContainer from '$lib/LeadContainer.svelte';
	import StrikeThroughText from '$lib/StrikeThroughText.svelte';
	import WorkTile from '$lib/WorkTile.svelte';
	import WorkWrapper from '$lib/WorkWrapper.svelte';
	import LazyImage from '$lib/LazyImage.svelte';

	export let data;

	const landing = data.project.landingMedia ?? data.project.thumbnail;
</script>

<LeadContainer title={data.project.label} textSmall={data.project.description}>
	<p class="subtext">{data.project.category}</p>
	<p class="subtext">{data.project.year}</p>
</LeadContainer>

<div class="images-container">
	{#if landing.endsWith('.mp4')}
		<video class="main-image" autoplay muted loop preload>
			<source src={landing} type="video/mp4" />
			Your browser does not support the video tag.
		</video>
	{:else}
		<LazyImage path={landing} alt="landing graphics" additionalClasses="main-image " />
	{/if}
	<div class="gallery">
		{#each data.project.images as image}
			{#if Array.isArray(image)}
				<div class="image-group">
					{#each image as actualImage}
						<div class="image-group-image">
							<LazyImage path={actualImage} alt="" additionalClasses="gallery-image" />
						</div>
					{/each}
				</div>
			{:else}
				<LazyImage path={image} alt="" additionalClasses="gallery-image" />
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
	.subtext {
		font-family: 'Outfit';
		font-weight: 400;
		font-size: var(--text-20);
		line-height: 138%;
	}

	.images-container {
		position: relative;
		padding: 0 35px;
	}

	.main-image {
		position: relative;
		width: 100%;
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

	@media screen and (max-width: 1200px) {
		.subtext {
			margin: 38px;
		}
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
