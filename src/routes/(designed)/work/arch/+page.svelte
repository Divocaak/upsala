<script>
	import LeadContainer from '$lib/LeadContainer.svelte';
	import ArchCategory from '$lib/ArchCategory.svelte';
	import ArchButton from '$lib/ArchButton.svelte';
</script>

<LeadContainer
	title="Projekt arch"
	text="Chcete, aby vaše práce zaujala na první pohled? Klíčem je profesionální prezentace, a my víme, jak na ni. V naší nabídce najdete osvědčená řešení z kvalitních materiálů, na které se můžete spolehnout. Stačí si vybrat typ přebalu, formát a odhad počtu kusů - o zbytek se postaráme."
/>
<div class="categories-container">
	<ArchCategory
		heading="Archivační"
		text="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat."
		mediaPath="/_placeholders/4.jpg"
        sub="archival"
	/>
	<ArchCategory
		heading="Prezentační"
		text="Navrhneme design, který bude ladit s vaší firemní identitou a konkrétními potřebami. Po schválení návrhu zahájíme výrobu a obaly na míru vám doručíme až ke dveřím."
		mediaPath="/_placeholders/4.jpg"
        sub="presentational"
	/>
	<ArchCategory
		heading="Obaly a Boxy"
		text="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat."
		mediaPath="/_placeholders/4.jpg"
        sub="boxes"
	/>
</div>
<ArchButton />

<style>
	.categories-container {
		position: relative;
		width: calc(100% - 70px);
		height: auto;

		display: flex;
		justify-content: center;
		flex-direction: row;
		flex-wrap: wrap;

		padding: 0 35px;
	}
</style>
