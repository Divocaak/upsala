<script>
	import ArchCarousel from '$lib/ArchCarousel.svelte';

	export let subName, id, object;
</script>

<div class="wrapper">
	<div class="content-wrapper">
		<div class="content-holder">
			<p>{object.label}</p>
			<p>{object.text}</p>
			<img src="/dynamic/imgs/work/arch/{subName}/{id}/{object.icon}" alt="icon" />
		</div>
	</div>
	<div class="carousel-wrapper">
		<ArchCarousel>
			{#each object.imgs as imgPath}
				<img src="/dynamic/imgs/work/arch/{subName}/{id}/{imgPath}" />
			{/each}
		</ArchCarousel>
	</div>
</div>

<style>
	.wrapper {
		position: relative;
		width: calc(100% - 70px);
		height: 610px;

		padding: 0 35px;

        overflow: hidden;
	}

	.content-wrapper {
		position: absolute;
		width: 35%;
		height: 100%;

		left: 0;
	}

	.content-holder {
		position: relative;
		width: 40%;
		height: 100%;

		margin: 0 auto;
        padding-top: 10%;

		display: flex;
		flex-direction: column;
		justify-content: start;
	}

	.content-holder p:first-of-type {
		font-weight: 600;
		font-size: var(--text-36);
		line-height: 138%;
		text-transform: uppercase;
	}
	.content-holder p:last-of-type {
		font-weight: 400;
		font-size: var(--text-20);
		line-height: 138%;
	}
	.content-holder img {
		position: relative;
		width: 50%;
		height: auto;
	}

	.carousel-wrapper {
		position: absolute;
		width: 65%;
		height: 100%;

		right: 0;
	}

    .carousel-wrapper img{
        position: relative;
        width: 100%;
    }
</style>
