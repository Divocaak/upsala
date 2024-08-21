<script>
	import LeadContainer from '$lib/LeadContainer.svelte';
	let title = `Kalina
    Gallery &
    Apartments`;
	let textSmall = `Galerie se zaměřuje na prezentaci současného umění etablovaných i začínajících výtvarných umělců.
    
    Je charakteristická výběrem výjimečných talentů, svou rozmanitostí i snahou o širší kulturní dopad. 

Úzká spolupráce s umělci a důkladné porozumění formám uměleckého vyjádření jsou ústředním bodem její identity. Inspirativní jsou také četná setkání s umělci v samotné galerii. Kalina Gallery úzce spolupracuje se všemi svými umělci tak, aby dokázala zajistit nejvyšší možnou úroveň prezentace, a to v prostoru, který je pro tento účel přímo stvořený. 

Díky jedinečnému výběru vysoce hodnotných sběratelských uměleckých děl a svou nekompromisní věrností inovacím světového umění, se galerie zavázala plnit poslání leadera ve svém oboru. Vstupuje na trh s uměním a má široký rozsah pro různé typy sběratelů i sbírek`;
</script>

<LeadContainer {title} {textSmall}>
	<p class="subtext">logo / vizuální identita / orientační systém</p>
	<p class="subtext">2022</p>
</LeadContainer>

<style>
	.subtext {
		font-family: 'Outfit';
		font-style: normal;
		font-weight: 400;
		font-size: 20px;
		line-height: 138%;
	}
</style>
