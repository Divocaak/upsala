<script>
	import LeadContainer from '$lib/LeadContainer.svelte';
	import StyledForm from '$lib/StyledForm.svelte';
	import WorkWrapper from '$lib/WorkWrapper.svelte';
	import WorkTile from '$lib/WorkTile.svelte';
</script>

<svelte:head>
	<title>projekt arch</title>
</svelte:head>

<LeadContainer
	title="Projekt arch"
	text="Chcete, aby vaše práce zaujala na první pohled? Klíčem je profesionální prezentace, a my víme, jak na ni. V naší nabídce najdete osvědčená řešení z kvalitních materiálů, na které se můžete spolehnout. Stačí si vybrat typ přebalu, formát a odhad počtu kusů - o zbytek se postaráme."
/>
<WorkWrapper>
	<WorkTile
		heading="Archivační"
		text="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat."
		subThumbnail="/arch_thumbnail.jpg"
		subPath="archival"
	/>
	<WorkTile
		heading="Prezentační"
		text="Navrhneme design, který bude ladit s vaší firemní identitou a konkrétními potřebami. Po schválení návrhu zahájíme výrobu a obaly na míru vám doručíme až ke dveřím."
		subThumbnail="/arch_thumbnail.jpg"
		subPath="presentational"
	/>
	<WorkTile
		heading="Obaly a Boxy"
		text="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat."
		subThumbnail="/arch_thumbnail.jpg"
		subPath="boxes"
	/>
</WorkWrapper>
<StyledForm />