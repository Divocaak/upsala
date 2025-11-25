<script>
	import GalleryMedia from '$lib/GalleryMedia.svelte';
	import Filter from '$lib/Filter.svelte';

	export let mediaPath;
	export let label;
	export let services;
</script>

<div class="wrapper">
	<div class="media-wrapper">
		<GalleryMedia media={mediaPath} paddingBottom={false} />
	</div>
	<div class="texts-wrapper">
		<h1>{@html label}</h1>
		<div class="services-wrapper">
			{#each services as service}
				<Filter label={service} />
			{/each}
		</div>
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
		max-width: 200px;
		max-height: 200px;
		aspect-ratio: 1/1;
		
		overflow: hidden;
	}

	.texts-wrapper {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.texts-wrapper h1 {
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

	@media screen and (max-width: 900px) {
		:root {
			--width: 100%;
		}

		.wrapper {
			flex-direction: row;
			gap: var(--general-px);

			padding-bottom: var(--general-px);
		}

		.texts-wrapper{
			width: 100%;
		}
		
		.texts-wrapper h1{
			text-align: start;
			width: 100%;
		}

		.services-wrapper {
			text-align: start;
		}
	}
</style>
