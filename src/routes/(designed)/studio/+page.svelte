<script>
	import Client from '$lib/studioElements/Client.svelte';
	import LeadContainer from '$lib/containers/LeadContainer.svelte';
	import HalfsLayout from '$lib/containers/HalfsLayout.svelte';
	import StudioContainer from '$lib/containers/StudioContainer.svelte';
	import { onMount } from 'svelte';
	import Process from '$lib/studioElements/Process.svelte';

	let clientColL = [];
	let clientColR = [];
	onMount(async () => {
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
	text="Studio Upsala jsme založili v roce 2003 a pracujeme pro českou i zahraniční klientelu. Zakládáme si na osobním vztahu s našimi zákazníky a věříme, že rovnocenný dialog je zárukou úspěšné spolupráce."
	textSmall="Všechna zadání jsou pro nás výzvou a ke každému projektu přistupujeme individuálně. Úzce spolupracujeme s marketingovými specialisty, copywritery, fotografy, architekty, kodéry a další. Profesionálním přístupem pomáháme našim klientům vynakládat prostředky jen na to, co skutečně potřebují. Naší doménou je osobitý, funkční a nadčasový design."
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
				Logo design<br />
				Vizuální identita<br />
				Branding a rebranding<br />
				Tvorba tiskovin<br />
				Merchandise<br />
				Interiérový design
			</p>
		</div>
		<div slot="r">
			<p class="service">
				Web design<br />
				SoMe grafika<br />
				Obalový design<br />
				DTP práce<br />
				Grafické konzultace<br />
			</p>
		</div>
	</HalfsLayout>
</StudioContainer>

<StudioContainer title="Postup" vidPath="/studioAnim.mp4">
	<div class="process-wrapper">
		<Process
			label="První rande"
			text="Společné seznámení u nás není jen prázdná fráze. Aby vám vizuál sedl jako ulitý, musíme vás nejdřív pořádně poznat. Kdo jste, jak fungujete, jaké máte cíle a sny. Jen tak najdeme podstatu vaší značky a vytvoříme autentický vizuál přímo pro vás."
		/>
		<Process
			label="Volím si tebe!"
			text="Na dalších schůzkách projdeme všechny návrhy a možnosti. Společně vybereme identitu, která vám nejlíp sedne a bude odrážet vaše hodnoty. Cílem je, abyste cítili, že vaše značka působí přesně tak, jak sami chcete."
		/>
		<Process
			label="Mise splněna"
			text="Po dokončení návrhu naše práce nekončí. Rádi vám ulehčíme od starostí a postaráme se o vaše realizace. Ať už potřebujete publikaci, etikety, světelný sign, banner, nebo grafiku na budovu, máme roky zkušeností a víme, jaké řešení bude pro vás to pravé. S námi jste v dobrých rukou.t"
		/>
	</div>
</StudioContainer>

<StudioContainer title="Klienti">
	<HalfsLayout>
		<div slot="l">
			{#if clientColL}
				{#each clientColL as ref}
					<Client label={ref.label} image={ref.image} />
				{/each}
			{/if}
		</div>
		<div slot="r">
			{#if clientColR}
				{#each clientColR as ref}
					<Client label={ref.label} image={ref.image} />
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
