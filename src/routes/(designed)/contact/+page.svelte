<script>
	import Contact from '$lib/Contact.svelte';
</script>

<div class="lead">
	<p>
		UPSALA, s.r.o. <br />
		Jakubská 1, 602 00 Brno
	</p>
</div>
<div class="contact-container">
	<Contact name="Tomáš Zahradníček" tel="604 924 084" mail="upsala@upsala.cz" />
	<Contact name="Vendula Evjáková" tel="734 570 385" mail="vendula@upsala.cz" />
	<Contact name="Vít Veit" tel="606 515 651" mail="vit@upsala.cz" />
</div>

<style>
	.lead {
		position: relative;
		width: 100%;
		top: 20vh;

		font-size: 96px;
		line-height: 145%;

		text-align: center;
	}

    .contact-container{
        display: flex;
        justify-content: center;
        position: absolute;
        width: 100%;
		left: 0;
        top: 90vh;
        padding-bottom: 40vh;
    }
</style>
