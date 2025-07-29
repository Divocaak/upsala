<script>
	import Client from '$lib/studioElements/Client.svelte';
	import LeadContainer from '$lib/containers/LeadContainer.svelte';
	import HalfsLayout from '$lib/containers/HalfsLayout.svelte';
	import StudioContainer from '$lib/containers/StudioContainer.svelte';
	import { onMount } from 'svelte';
	import Process from '$lib/studioElements/Process.svelte';

	let textData = {};
	let servicesColL = [];
	let servicesColR = [];

	let clientColL = [];
	let clientColR = [];
	onMount(async () => {
		const textResponse = await fetch('/dynamic/jsons/data/studio.json');
		textData = await textResponse.json();

		const servicesMid = Math.ceil(textData.services.length / 2);
		servicesColL = textData.services.slice(0, servicesMid);
		servicesColR = textData.services.slice(servicesMid);

		const res = await fetch('/dynamic/jsons/data/reference.json');
		const data = await res.json();

		const mid = Math.ceil(data.reference.length / 2);
		clientColL = data.reference.slice(0, mid);
		clientColR = data.reference.slice(mid);
	});
</script>

<svelte:head>
	<title>studio</title>
</svelte:head>

<LeadContainer
	title="Grafické studio"
	text={textData.leading}
	textSmall={textData.leadingSub}
	paddedTitle={true}
>
	<div class="media-wrapper" slot="l">
		<img src="/studio.jpg" alt="lead container gpx" />
	</div>
</LeadContainer>

<StudioContainer title="Naše služby" imgPath="/studio2.jpg">
	<HalfsLayout>
		<div slot="l">
			<p class="service">
				{#if servicesColL}
					{#each servicesColL as service}
						{service}<br />
					{/each}
				{/if}
			</p>
		</div>
		<div slot="r">
			<p class="service">
				{#if servicesColR}
					{#each servicesColR as service}
						{service}<br />
					{/each}
				{/if}
			</p>
		</div>
	</HalfsLayout>
</StudioContainer>

<StudioContainer title="Postup" vidPath="/studioAnim.mp4">
	<div class="process-wrapper">
		{#each textData.workflow as panel}
			<Process label={panel.heading} text={panel.content} />
		{/each}
	</div>
</StudioContainer>

<StudioContainer title="Klienti">
	<HalfsLayout>
		<div slot="l">
			{#if clientColL}
				{#each clientColL as ref}
					{#if ref.visible}
						<Client label={ref.label} image={ref.image} />
					{/if}
				{/each}
			{/if}
		</div>
		<div slot="r">
			{#if clientColR}
				{#each clientColR as ref}
					{#if ref.visible}
						<Client label={ref.label} image={ref.image} />
					{/if}
				{/each}
			{/if}
		</div>
	</HalfsLayout>
</StudioContainer>

<style>
	.media-wrapper {
		width: 60%;
	}

	.media-wrapper img {
		position: relative;
		width: 100%;
		height: auto;
	}

	.process-wrapper {
		width: 100%;
		height: 100%;

		display: flex;
		flex-direction: column;
	}

	.service {
		font-size: var(--text-32);
		line-height: 1.6em;
	}

	.service:first-of-type {
		margin-top: 0 !important;
	}

	@media screen and (max-width: 900px) {
		.media-wrapper {
			width: 100%;
			padding-bottom: var(--general-px);
		}
	}
</style>
