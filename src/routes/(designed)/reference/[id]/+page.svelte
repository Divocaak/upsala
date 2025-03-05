<script>
	import LeadContainer from '$lib/containers/LeadContainer.svelte';
	import StrikeThroughText from '$lib/StrikeThroughText.svelte';
	import WorkTile from '$lib/workTiles/WorkTile.svelte';
	import WorkWrapper from '$lib/workTiles/WorkWrapper.svelte';
	import Filter from '$lib/Filter.svelte';
	import GalleryMedia from '$lib/GalleryMedia.svelte';

	export let data;

	console.log(data);
</script>

<svelte:head>
	<title>{data.project.label}</title>
</svelte:head>

<LeadContainer title={data.project.label} textSmall={data.project.description}>
	<div slot="r">
		{#if data.project.filters}
			{#each data.project.filters as filter}
				<Filter label={filter} />
			{/each}
		{/if}
	</div>
</LeadContainer>

<div class="images-container">
	{#each data.project.images as image}
		{#if Array.isArray(image)}
			<div class="image-group">
				{#each image as actualImage}
					<div class="image-group-image">
						<GalleryMedia media={actualImage} />
					</div>
				{/each}
			</div>
		{:else}
			<GalleryMedia media={image} />
		{/if}
	{/each}
</div>

<StrikeThroughText label="Reference" />
<WorkWrapper>
	{#each data.references as project}
		<WorkTile {project} />
	{/each}
</WorkWrapper>

<style>
	* {
		box-sizing: border-box;
	}

	.images-container {
		position: relative;
		padding: 0 var(--general-px);
		padding-bottom: calc(2 * var(--general-px));
	}

	.image-group {
		width: 100%;

		display: grid;
		justify-content: center;
		align-items: center;
		gap: 0 var(--general-px);
		grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
	}

	.image-group-image {
		width: 100%;
		height: auto;
	}

	@media screen and (max-width: 900px) {
		.image-group {
			grid-template-columns: 1fr;
		}
	}
</style>
