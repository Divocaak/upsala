<script>
	import LeadContainer from '$lib/containers/LeadContainer.svelte';
	import NewsletterForm from '$lib/forms/NewsletterForm.svelte';
	import RunningText from '$lib/runningElements/RunningText.svelte';
	import Service from '$lib/studioElements/Service.svelte';
	import FlowPanel from '$lib/studioElements/FlowPanel.svelte';
	import RunningBoxes from '$lib/runningElements/RunningBoxes.svelte';

	export let data;
	const textData = data.textData;
	const splitReference = data.splitReference;
</script>

<svelte:head>
	<title>studio</title>
</svelte:head>

<LeadContainer
	title="Grafické<br>Studio Upsala"
	text={textData.leading}
	textSmall={textData.leadingSub}
	paddedTitle={true}
	leftHalfWidth="50"
	rigthHalfWidth="50"
	gap="2"
>
	<div class="media-wrapper" slot="l">
		<img src={textData.landingImage} alt="lead container gpx" />
		<p>{textData.photoLabel}</p>
	</div>
</LeadContainer>

<LeadContainer title="Naše služby" />
<div class="services-wrapper">
	{#each textData.services as service}
		<Service mediaPath={service.media} label={service.label} services={service.actualServices} />
	{/each}
</div>

<LeadContainer title="Postup" />
{#each textData.workflow as flow, i}
	<FlowPanel
		imgSrc={flow.media}
		number="0{i + 1}"
		lead={flow.heading}
		text={flow.content}
		isMiddle={i == 1}
	/>
{/each}

<LeadContainer title="Klienti" />
<div class="clients-grid">
	{#each splitReference as col}
		<ul>
			{#each col as client}
				{#if client.visible}
					<li>
						{#if client.link}<a href={client.link} target="_blank">{client.label}</a>
						{:else}<p>{client.label}</p>
						{/if}
					</li>
				{/if}
			{/each}
		</ul>
	{/each}
</div>
<RunningBoxes items={textData.reference} />
<NewsletterForm />
<RunningText text={textData.runningText} />

<style>
	.media-wrapper img {
		position: relative;
		width: 100%;
		height: auto;
	}

	.media-wrapper p {
		font-weight: 400;
		font-size: var(--text-20);
		line-height: 93%;
		letter-spacing: 1px;
	}

	.services-wrapper {
		display: flex;
		flex-direction: row;
		justify-content: space-between;

		padding: 0 var(--general-px);
		width: calc(100% - 2 * var(--general-px));
	}

	.clients-grid {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		gap: 2rem;
		width: calc(100% - 2 * var(--general-px));
		padding: 0 var(--general-px);
	}

	ul {
		list-style: none;
		margin: 0;
		padding: 0;
	}

	li p, li a {
		font-weight: 300;
		font-size: 1rem;
		line-height: 1.6;
		white-space: nowrap;
		margin: 0;
	}

	@media screen and (max-width: 900px) {
		.media-wrapper {
			width: 100%;
			padding-bottom: var(--general-px);
		}

		.services-wrapper {
			flex-direction: column;
		}


		.clients-grid {
			grid-template-columns: repeat(1, 1fr);
			gap: 0rem;
		}
	}
</style>
