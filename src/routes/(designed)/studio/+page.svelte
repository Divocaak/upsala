<script>
	import Value from '$lib/Value.svelte';
	import StrikeThroughText from '$lib/StrikeThroughText.svelte';
	import WorkflowBox from '$lib/WorkflowBox.svelte';
	import ReferenceRow from '$lib/ReferenceRow.svelte';
</script>

<div class="lead-container">
	<h1>grafické<br />studio</h1>
	<div class="lead-text">
		<p>
			Studio Upsala jsme založili v roce 2003 a pracujeme pro českou i zahraniční klientelu.
			Zakládáme si na osobním vztahu s našimi zákazníky a věříme, že rovnocenný dialog je zárukou
			úspěšné spolupráce.
		</p>
		<p>
			Všechna zadání jsou pro nás výzvou a ke každému projektu přistupujeme individuálně. Úzce
			spolupracujeme s marketingovými specialisty, copywritery, fotografy, architekty, kodéry a
			další. Profesionálním přístupem pomáháme našim klientům vynakládat prostředky jen na to, co
			skutečně potřebují. Naší doménou je osobitý, funkční a nadčasový design.
		</p>
	</div>
</div>
<div class="values-container">
	<Value
		heading="Styl"
		text="Snažíme se maximálně vystihnout hodnoty klienta a charakter značky. Dostanete stylový a promyšlený design, za kterým si 100% stojíme. "
		mediaPath="/_placeholders/0.jpg"
		mediaAlt=""
	/>
	<Value
		heading="Zkušenosti"
		text="Grafickému designu se věnujeme už dvacet let a máme klienty po celé České republice i na Slovensku. V oboru jsme jako ryby ve vodě."
		mediaPath="/_placeholders/0.jpg"
		mediaAlt=""
	/>
	<Value
		heading="Přístup"
		text="Ať už jde o nadnárodní společnost nebo lokálního podnikatele, ke každému z klientů přistupujeme individuálně. Spolu tvoříme designy s tou pravou hodnotou. "
		mediaPath="/_placeholders/0.jpg"
		mediaAlt=""
	/>
	<Value
		heading="Nadšení"
		text="Žijeme designem. Naše studio je plné kreativců, co do návrhů dávají kus srdce. "
		mediaPath="/_placeholders/0.jpg"
		mediaAlt=""
		borderRight={false}
	/>
</div>
<StrikeThroughText label="naše služby" />
<div class="workflow-container">
	<WorkflowBox
		label="text 1"
		text="Společné seznámení není jen prázdná fráze. Aby vám vizuál sedl jako ulitý, musíme vás nejdřív pořádně poznat."
		topBorder={false}
	/>
	<WorkflowBox
		label="text 2"
		text="Společné seznámení není jen prázdná fráze. Aby vám vizuál sedl jako ulitý, musíme vás nejdřív pořádně poznat."
	/>
	<WorkflowBox
		label="text 3"
		text="Společné seznámení není jen prázdná fráze. Aby vám vizuál sedl jako ulitý, musíme vás nejdřív pořádně poznat."
	/>
</div>
<StrikeThroughText label="reference" />
<div class="reference-container">
	<ReferenceRow label="FTV Prima" media="/_placeholders/1.jpg" alt="" />
	<ReferenceRow label="E.ON" media="/_placeholders/1.jpg" alt="" />
	<ReferenceRow label="Seznam.cz" media="/_placeholders/1.jpg" alt="" />
	<ReferenceRow
		label="Státní zemědělská a potravinářská inspekce Česká spořitelna"
		media="/_placeholders/1.jpg"
		alt=""
	/>
	<ReferenceRow label="KBC (ČSOB)" media="/_placeholders/1.jpg" alt="" />
	<ReferenceRow label="Alca plast" media="/_placeholders/1.jpg" alt="" />
	<ReferenceRow label="ČAD Blansko" media="/_placeholders/1.jpg" alt="" />
	<ReferenceRow label="OKAY" media="/_placeholders/1.jpg" alt="" />
	<ReferenceRow label="Vermont" media="/_placeholders/1.jpg" alt="" />
	<ReferenceRow label="Gant" media="/_placeholders/1.jpg" alt="" />
	<ReferenceRow label="Galerie Moritz, Olomouc" media="/_placeholders/1.jpg" alt="" />
	<ReferenceRow label="Holiday Inn Prague Airport" media="/_placeholders/1.jpg" alt="" />
	<ReferenceRow label="Hotel KOCOUR, Třebíč" media="/_placeholders/1.jpg" alt="" />
	<ReferenceRow label="FAIRHOTEL, Brno" media="/_placeholders/1.jpg" alt="" />
</div>

<style>
	.lead-container {
		position: relative;
		top: 20vh;

		width: 100%;
		height: 100vh;
	}

	.lead-container h1 {
		position: absolute;
		left: 38px;

		font-weight: 600;
		font-size: 96px;
		line-height: 93%;
		text-transform: uppercase;

		color: var(--thick-text);
	}

	.lead-text {
		position: absolute;
		width: 735px;
		right: 38px;
		top: 40px;
	}

	.lead-text p:first-of-type {
		font-weight: 400;
		font-size: 32px;
		line-height: 170%;
	}

	.lead-text p:last-of-type {
		font-weight: 400;
		font-size: 20px;
		line-height: 138%;
	}

	.values-container,
	.workflow-container,
	.reference-container {
		padding-bottom: 300px;
	}

	.values-container {
		display: flex;
		justify-content: center;
		position: relative;
		width: 100%;
	}

	.reference-container {
        padding-top: 50px;
		padding-left: 65px;
	}
</style>
