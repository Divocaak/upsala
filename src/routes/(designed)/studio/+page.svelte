<script>
	import Value from '$lib/Value.svelte';
	import StrikeThroughText from '$lib/StrikeThroughText.svelte';
	import WorkflowBox from '$lib/WorkflowBox.svelte';
	import ReferenceRow from '$lib/ReferenceRow.svelte';
	import LeadContainer from '$lib/LeadContainer.svelte';
	import { reference } from '/dynamic/content.json';
</script>

<LeadContainer
	title="grafické
	studio"
	text="Studio Upsala jsme založili v roce 2003
	a pracujeme pro českou i zahraniční klientelu.
	Zakládáme si na osobním vztahu s našimi
	zákazníky a věříme, že rovnocenný dialog je
	zárukou úspěšné spolupráce."
	textSmall="Všechna zadání jsou pro nás výzvou a ke každému projektu přistupujeme
	individuálně. Úzce spolupracujeme s marketingovými specialisty, copywritery,
	fotografy, architekty, kodéry a další. Profesionálním přístupem pomáháme našim
	klientům vynakládat prostředky jen na to, co skutečně potřebují. Naší doménou
	je osobitý, funkční a nadčasový design."
/>
<div class="values-container">
	<Value
		heading="Styl"
		text="Snažíme se maximálně vystihnout
		hodnoty klienta a charakter značky.
		Dostanete stylový a promyšlený
		design, za kterým si 100% stojíme."
		mediaPath="/_placeholders/0.jpg"
		mediaAlt=""
	/>
	<Value
		heading="Zkušenosti"
		text="Grafickému designu
		se věnujeme už dvacet let
		a máme klienty po celé České
		republice i na Slovensku.
		V oboru jsme jako ryby ve vodě."
		mediaPath="/_placeholders/0.jpg"
		mediaAlt=""
	/>
	<Value
		heading="Přístup"
		text="Ať už jde o nadnárodní společnost
		nebo lokálního podnikatele,
		ke každému z klientů přistupujeme
		individuálně. Spolu tvoříme designy
		s tou pravou hodnotou."
		mediaPath="/_placeholders/0.jpg"
		mediaAlt=""
	/>
	<Value
		heading="Nadšení"
		text="Žijeme designem. Naše studio je
		plné kreativců, co do návrhů dávají
		kus srdce.
		A (na naší práci) je to znát."
		mediaPath="/_placeholders/0.jpg"
		mediaAlt=""
		borderRight={false}
	/>
</div>
<StrikeThroughText label="naše služby" />
<div class="workflow-container">
	<WorkflowBox
		label="krok 1"
		text="Společné seznámení není jen prázdná fráze. Aby vám vizuál sedl jako ulitý, musíme vás nejprve poznat. Do detailu a upřímně. Kdo jste, jak fungujete, jaké máte cíle a sny. Jen tak určíme základní/primární podstatu značky a vizuál bude přímo pro vás.
		
		Chceme, abyste uspěli. Navrhneme vám autentickou identitu, která bude relevantní a atraktivní pro zákazníky, a odliší vás od konkurence./která bude pro zákazníky atraktivní a odliší vás od konkurence."
		topBorder={false}
	/>
	<WorkflowBox
		label="krok 2"
		text="Na dalších schůzkách projdeme naše možnosti i návrhy. A vybereme, která identita vám bude pasovat. Ze značky musíte cítit své hodnoty a jestli působí tak, jak chcete."
	/>
	<WorkflowBox
		label="krok 3"
		text="Komunikaci značky nenecháváme po dokončení návrhu být. Rádi vám ulevíme od starostí a postaráme se i o realizace. Chcete publikaci, etikety, světelný sign, banner, nebo grafiku na budovu? Za ta léta praxe víme, jaké řešení pro vás bude to pravé! Máme síť spolehlivých dodavatelů, s námi jste v dobrých rukou."
	/>
</div>
<StrikeThroughText label="reference" />
<div class="reference-container">
	{#each reference as ref}
		<ReferenceRow label={ref.label} media={ref.imgPath} mediaAlt={ref.label} />
	{/each}
</div>

<style>
	.values-container,
	.workflow-container,
	.reference-container {
		position: relative;

		width: 100%;
		height: auto;

		padding-bottom: 300px;
	}

	.values-container {
		width: 100%;

		display: flex;
		justify-content: center;
		flex-direction: row;
		flex-wrap: wrap;
	}

	.reference-container {
		padding-top: 50px;
	}
</style>
