<script>
	import { onMount } from 'svelte';
	import LeadContainer from '$lib/containers/LeadContainer.svelte';
	import NewsletterForm from '$lib/forms/NewsletterForm.svelte';
	import RunningText from '$lib/runningElements/RunningText.svelte';
	import Service from '$lib/studioElements/Service.svelte';
	import FlowPanel from '$lib/studioElements/FlowPanel.svelte';
	import RunningBoxes from '$lib/runningElements/RunningBoxes.svelte';

	let textData = {};
	onMount(async () => {
		const textResponse = await fetch('/dynamic/jsons/data/studio.json');
		textData = await textResponse.json();

		const res = await fetch('/dynamic/jsons/data/reference.json');
		const data = await res.json();
	});

	const clients = [
		'H.A.N.S architekti',
		'znamení čtyř-architekti',
		'DOTEGG ARCHITEKTI',
		'CAPEXUS ',
		'DOMYJINAK ',
		'Adam Rujbr Architects',
		'BEK architekti ',
		'norman rourke pryme',
		'KNESL KYNČL architekti ',
		'Burian Křivinka architekti',
		'EA architekti ',
		'FTV Prima',
		'JSK Investments',
		'Nadace Simony Kijonkové',
		'ALCA PLAST ',
		'H.A.N.S. stavby',
		'H.A.N.S. Prefa',
		'Kalina Gallery',
		'Nejvyšší správní soud',
		'MP Capital Investments',
		'MP Holding',
		'ČSOB',
		'E.ON',
		'EUC (CANADIAN MEDICAL)',
		'Komerční banka (Société Générale)',
		'Česká spořitelna',
		'Vermont (Gant)',
		'ITW Pronovia',
		'WineWords',
		'Euroagentur (EA hotel Melantrich)',
		'Městská divadla pražská',
		'Hotel Clarion',
		'Cesta Talentu',
		'Refinery Gallery',
		'Knihovna Velká Bíteš',
		'Knihovna Velké Meziříčí',
		'Univerzita Palackého v Olomouci ',
		'Vysoké učení technické',
		'Choklid',
		'Mitte kavárna a hostel',
		'Dopoodpo kavárna',
		'U bílého beránka',
		'Fair hotel',
		'Cattani pasta',
		'Beefbar',
		'BAR mandarin'
	];
	const sorted = [...clients].sort((a, b) => a.localeCompare(b, 'cs', { sensitivity: 'base' }));
	const columns = 4;
	const perCol = Math.ceil(sorted.length / columns);
	const split = Array.from({ length: columns }, (_, i) =>
		sorted.slice(i * perCol, i * perCol + perCol)
	);

	const referenceBoxes = [
		{
			name: 'knesl kynčl architekti',
			text: '„Upsala nás přesvědčila už  v soutěži – nejlépe vystihla naše představy.“ „Upsala nás přesvědčila už v soutěži  – nejlépe vystihla naše představy.“'
		},
		{
			name: 'knesl kynčl architekti',
			text: '„Upsala nás přesvědčila už  v soutěži – nejlépe vystihla naše představy.“'
		},
		{ name: 'Charlie', text: 'Marquee boxes!' },
		{ name: 'a', text: 'a' }
	];
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
		<img src="{textData.landingImage}" alt="lead container gpx" />
		<p>{textData.photoLabel}Tomáš Zahradníček, zakladatel studia</p>
	</div>
</LeadContainer>

<LeadContainer title="Naše služby" />
<div class="services-wrapper">
	{#each textData.services as service}
	<Service mediaPath="{service.media}" label="{service.label}" services={service.actualServices} />
	{/each}
	<!-- <Service mediaPath="/studioAnim.mp4" label="Grafika" services={service1} />
	<Service mediaPath="/studioAnim.mp4" label="Web" services={service2} />
	<Service mediaPath="/studioAnim.mp4" label="Interier&nbsp;/&nbsp;Exterier" services={service3} /> -->
</div>

<LeadContainer title="Postup" />
<FlowPanel
	imgSrc="/flow0.jpg"
	number="01"
	lead={textData.workflow?.[0]?.heading}
	text={textData.workflow?.[0]?.content}
/>
<FlowPanel
	imgSrc="/flow1.jpg"
	number="02"
	lead="{textData.workflow?.[1]?.heading}"
	text="{textData.workflow?.[1]?.content}"
	isMiddle={true}
/>
<FlowPanel
	imgSrc="/flow2.jpg"
	number="03"
	lead="{textData.workflow?.[2]?.heading}"
	text="{textData.workflow?.[2]?.content}"
/>

<LeadContainer title="Klienti" />
<div class="clients-grid">
	{#each split as col}
		<ul>
			{#each col as client}
				<li><a href="/" target="_blank">{client.trim()}</a></li>
			{/each}
		</ul>
	{/each}
</div>
<!-- TODO from json -->
<RunningBoxes items={referenceBoxes} />
<NewsletterForm />
<!-- TODO from json -->
<RunningText text="# studio # kreativita # zkušenosti " />

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

	li {
		font-weight: 300;
		font-size: 1rem;
		line-height: 1.6;
		white-space: nowrap;
	}

	@media (max-width: 500px) {
		.clients-grid {
			grid-template-columns: 1fr;
		}
	}

	@media screen and (max-width: 900px) {
		.media-wrapper {
			width: 100%;
			padding-bottom: var(--general-px);
		}

		.clients-grid {
			grid-template-columns: repeat(2, 1fr);
		}
	}
</style>
