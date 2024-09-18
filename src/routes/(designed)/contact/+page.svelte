<script>
	import Contact from '$lib/Contact.svelte';
	import LeadContainer from '../../../lib/LeadContainer.svelte';
</script>

<LeadContainer title="Contact" contact={true}>
	<div class="contact-container">
		<Contact name="Tomáš Zahradníček" tel="604 924 084" mail="upsala@upsala.cz" />
		<Contact name="Vendula Evjáková" tel="734 570 385" mail="vendula@upsala.cz" />
		<Contact name="Vít Veit" tel="606 515 651" mail="vit@upsala.cz" />
	</div>
</LeadContainer>

<!-- <div class="lead">
	<p>
		UPSALA, s.r.o. <br />
		Jakubská 1, 602 00 Brno
	</p>
</div>
<div class="contact-container">
	<Contact name="Tomáš Zahradníček" tel="604 924 084" mail="upsala@upsala.cz" />
	<Contact name="Vendula Evjáková" tel="734 570 385" mail="vendula@upsala.cz" />
	<Contact name="Vít Veit" tel="606 515 651" mail="vit@upsala.cz" />
</div> -->

<style>
	.lead {
		position: relative;
		width: 100%;
		padding: 20vh 0;

		/* font-weight: 600; */
		font-size: var(--text-96);
		line-height: 93%;

		text-align: center;
	}

	.contact-container {
		display: flex;
		flex-wrap: wrap;

		justify-content: center;
		position: relative;
		width: 100%;
		left: 0;
		/* padding-bottom: 40vh; */
	}
</style>
