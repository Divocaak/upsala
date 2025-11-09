<script>
	import Client from '$lib/studioElements/Client.svelte';
	import LeadContainer from '$lib/containers/LeadContainer.svelte';
	import HalfsLayout from '$lib/containers/HalfsLayout.svelte';
	import StudioContainer from '$lib/containers/StudioContainer.svelte';
	import { onMount } from 'svelte';
	import Process from '$lib/studioElements/Process.svelte';
	import NewsletterForm from '$lib/forms/NewsletterForm.svelte';
	import RunningText from '$lib/RunningText.svelte';

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

	const txt1 =
		'Jsme grafické studio založené v roce 2003.<br>Ovládá nás kreativita, usměrňuje praxe a zkušenosti<br>a motivuje touha dostat ze zadání maximum.';
	const txt2 =
		'Naše práce nás stále baví stejně jako na&nbsp;začátku, ať už jde o&nbsp;menší projekty<br>nebo spolupráci s&nbsp;velkými značkami, z&nbsp;Česka nebo zahraničí. Ke&nbsp;každému úkolu přistupujeme s&nbsp;nadšením a&nbsp;snažíme se&nbsp;najít řešení, které nejen dobře vypadá, <br>ale hlavně dlouhodobě funguje.';
	const txt3 =
		'Sázíme na&nbsp;osobní přístup a&nbsp;otevřenou komunikaci.<br>Jen tak můžeme s&nbsp;klienty najít řešení, které nejlépe vystihne jejich značku.<br>Při spolupráci nehledáme složitosti tam, kde nejsou&nbsp;-&nbsp;navrhujeme jen to, co má skutečný přínos. Spolupracujeme se&nbsp;specialisty z&nbsp;různých oborů&nbsp;-&nbsp;od&nbsp;marketérů přes textaře až po&nbsp;programátory&nbsp;-&nbsp;a&nbsp;pomáháme klientům efektivně investovat zdroje přesně tam, kde jsou potřeba.';
</script>

<svelte:head>
	<title>studio</title>
</svelte:head>

<LeadContainer
	title="Grafické<br>Studio Upsala"
	text={txt1}
	textSmall="{txt2}<br><br>{txt3}"
	paddedTitle={true}
	leftHalfWidth="50"
	rigthHalfWidth="50"
	gap="2"
>
	<div class="media-wrapper" slot="l">
		<!-- TODO from json -->
		<img src="/zahradnicek.jpg" alt="lead container gpx" />
		<p>Tomáš Zahradníček, zakladatel studia</p>
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
<NewsletterForm />
<!-- TODO from json -->
<RunningText text="# studio # kreativita # zkušenosti " />

<style>
	.media-wrapper {
		/* width: 50%; */
	}

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
