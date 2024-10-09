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
	title="grafické
	studio"
	text="Studio Upsala jsme založili v roce 2003 a pracujeme pro českou i zahraniční klientelu. Zakládáme si na osobním vztahu s našimi zákazníky a věříme, že rovnocenný dialog je zárukou úspěšné spolupráce."
	textSmall="Všechna zadání jsou pro nás výzvou a ke každému projektu přistupujeme individuálně. Úzce spolupracujeme s marketingovými specialisty, copywritery, fotografy, architekty, kodéry a další. Profesionálním přístupem pomáháme našim klientům vynakládat prostředky jen na to, co skutečně potřebují. Naší doménou je osobitý, funkční a nadčasový design."
	paddedTitle={true}
	imgPath="/arch_thumbnail.jpg"
/>
<StudioContainer title="naše služby" imgPath="/arch_thumbnail.jpg">
	<HalfsLayout>
		<div slot="l">
			<p>
				Logo design<br />
				Vizuální identita<br />
				Branding a rebranding<br />
				Tvorba tiskovin<br />
				Merchandise<br />
				Interiérový design
			</p>
		</div>
		<div slot="r">
			<p>
				Web design<br />
				SoMe grafika<br />
				Obalový design<br />
				DTP práce<br />
				Grafické konzultace<br />
			</p>
		</div>
	</HalfsLayout>
</StudioContainer>

<StudioContainer title="postup" vidPath="/anims/0.mp4">
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

<StudioContainer title="klienti">
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
	.process-wrapper {
		width: 100%;
		height: 100%;

		display: flex;
		flex-direction: column;
	}
</style>
