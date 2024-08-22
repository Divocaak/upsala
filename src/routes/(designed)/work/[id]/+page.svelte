<script>
	import LeadContainer from '$lib/LeadContainer.svelte';
	let title = `Kalina
    Gallery &
    Apartments`;
	let textSmall = `Galerie se zaměřuje na prezentaci současného umění etablovaných i začínajících výtvarných umělců.
    
    Je charakteristická výběrem výjimečných talentů, svou rozmanitostí i snahou o širší kulturní dopad. 

    Úzká spolupráce s umělci a důkladné porozumění formám uměleckého vyjádření jsou ústředním bodem její identity. Inspirativní jsou také četná setkání s umělci v samotné galerii. Kalina Gallery úzce spolupracuje se všemi svými umělci tak, aby dokázala zajistit nejvyšší možnou úroveň prezentace, a to v prostoru, který je pro tento účel přímo stvořený. 

    Díky jedinečnému výběru vysoce hodnotných sběratelských uměleckých děl a svou nekompromisní věrností inovacím světového umění, se galerie zavázala plnit poslání leadera ve svém oboru. Vstupuje na trh s uměním a má široký rozsah pro různé typy sběratelů i sbírek`;
    let mainImgPath = "/_placeholders/5.jpg";
</script>

<LeadContainer {title} {textSmall}>
	<p class="subtext">logo / vizuální identita / orientační systém</p>
	<p class="subtext">2022</p>
</LeadContainer>

<div class="images-container">
    <img class="main-image" src="{mainImgPath}" alt="landing graphics"/>
    <div class="gallery">
        <img src="/_placeholders/0.jpg" alt=""/>
        <img src="/_placeholders/1.jpg" alt=""/>
        <img src="/_placeholders/2.jpg" alt=""/>
        <img src="/_placeholders/7.jpg" alt=""/>
        <img src="/_placeholders/3.jpg" alt=""/>
        <img src="/_placeholders/4.jpg" alt=""/>
        <img src="/_placeholders/8.jpg" alt=""/>
        <img src="/_placeholders/5.jpg" alt=""/>
        <img src="/_placeholders/6.jpg" alt=""/>

    </div>
</div>
    
<style>
	.subtext {
		font-family: 'Outfit';
		font-weight: 400;
		font-size: 20px;
		line-height: 138%;
	}

    .images-container{
        position: relative;
        padding: 0 35px;
    }

    .main-image{
        position: relative;
        width: 100%;
        border-radius: var(--border-radius);
    }

    .gallery{
        background-color: green;
    }

    .gallery img{
        display: inline-flexbox;
        align-self:flex-start;

        width: 40%;
    }
</style>
