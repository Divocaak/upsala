<script>
	import Contact from '$lib/Contact.svelte';
	import LeadContainer from '$lib/containers/LeadContainer.svelte';
	import StyledForm from '$lib/StyledForm.svelte';
</script>

<svelte:head>
	<title>kontakt</title>
</svelte:head>

<LeadContainer title="Kontakt" paddedTitle={true}>
	<p class="contact" slot="l">
		UPSALA, s.r.o. <br />
		Jakubská 1, 602 00 Brno
	</p>
	<div class="contact-container" slot="r">
		<Contact name="Tomáš Zahradníček" tel="604 924 084" mail="upsala@upsala.cz" />
		<Contact name="Vendula Evjáková" tel="734 570 385" mail="vendula@upsala.cz" />
		<Contact name="Vít Veit" tel="606 515 651" mail="vit@upsala.cz" />
	</div>
</LeadContainer>
<StyledForm
	label="Kontaktujte nás"
	subject="Kontaktujte nás"
	descriptionLabel="Zpráva"
	isArch={false}
/>

<style>
	.contact {
		padding-top: 100px;
		font-size: var(--text-36);
		width: 60%;
	}

	.contact-container {
		display: flex;
		flex-wrap: wrap;

		justify-content: center;
		position: relative;
		width: 100%;
	}
</style>
