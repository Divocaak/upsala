<script>
	import Client from '$lib/studioElements/Client.svelte';
	import LeadContainer from '$lib/containers/LeadContainer.svelte';
	import HalfsLayout from '$lib/containers/HalfsLayout.svelte';
	import StudioContainer from '$lib/containers/StudioContainer.svelte';
	import { onMount } from 'svelte';
	import Process from '$lib/studioElements/Process.svelte';
	import NewsletterForm from '$lib/forms/NewsletterForm.svelte';
	import RunningText from '$lib/runningElements/RunningText.svelte';
	import Service from '../../../lib/studioElements/Service.svelte';
	import FlowPanel from '../../../lib/studioElements/FlowPanel.svelte';
	import RunningBoxes from '../../../lib/runningElements/RunningBoxes.svelte';

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

	const service1 = ['asd', 'dsa', 'qwe', 'eqwe', 'cyby', 'hhsdhsh'];
	const service2 = ['asd', 'eqwe', 'cyby', 'hhsdhsh'];
	const service3 = ['asd', 'dsa', 'qwe', 'eqwe', 'cyby', 'hhsdhsh', 'asd', 'dsa', 'qwe'];

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
		{ name: 'knesl kynčl architekti', text: '„Upsala nás přesvědčila už  v soutěži – nejlépe vystihla naše představy.“ „Upsala nás přesvědčila už v soutěži  – nejlépe vystihla naše představy.“' },
		{ name: 'knesl kynčl architekti', text: '„Upsala nás přesvědčila už  v soutěži – nejlépe vystihla naše představy.“' },
		{ name: 'Charlie', text: 'Marquee boxes!' },
		{ name: 'a', text: 'a' }]
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

<LeadContainer title="Naše služby" />
<div class="services-wrapper">
	<Service mediaPath="/studioAnim.mp4" label="Grafika" services={service1} />
	<Service mediaPath="/studioAnim.mp4" label="Web" services={service2} />
	<Service mediaPath="/studioAnim.mp4" label="Interier&nbsp;/&nbsp;Exterier" services={service3} />
</div>

<LeadContainer title="Postup" />
<FlowPanel
	imgSrc="/flow0.jpg"
	number="01"
	lead="Společné seznámení u nás není jen prázdná fráze."
	text="Aby vám vizuál sedl jako ulitý, musíme vás nejdřív pořádně poznat. Kdo jste, jak fungujete, jaké máte cíle a sny. Jen tak najdeme podstatu vaší značky a vytvoříme autentický vizuál přímo pro vás."
/>
<FlowPanel
	imgSrc="/flow1.jpg"
	number="02"
	lead="Na dalších schůzkách projdeme všechny návrhy a možnosti."
	text="Společně vybereme identitu, která vám nejlíp sedne a bude odrážet vaše hodnoty. Cílem je, abyste cítili, že vaše značka působí přesně tak, jak sami chcete."
	isMiddle={true}
/>
<FlowPanel
	imgSrc="/flow2.jpg"
	number="03"
	lead="Po dokončení návrhu naše práce nekončí."
	text="Rádi vám ulehčíme od starostí a postaráme se o vaše realizace. Ať už potřebujete publikaci, etikety, světelný sign, banner, nebo grafiku na budovu, máme roky zkušeností a víme, jaké řešení bude pro vás to pravé. S námi jste v dobrých rukou.t"
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
<RunningBoxes items={referenceBoxes}/>
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
