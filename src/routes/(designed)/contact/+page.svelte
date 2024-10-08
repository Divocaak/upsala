<script>
	import Contact from '$lib/Contact.svelte';
	import LeadContainer from '$lib/LeadContainer.svelte';
	import StyledForm from '$lib/StyledForm.svelte';
</script>

<svelte:head>
	<title>kontakt</title>
</svelte:head>

<LeadContainer title="Kontakt" contact={true} paddedTitle={true}>
	<div class="contact-container">
		<Contact name="Tomáš Zahradníček" tel="604 924 084" mail="upsala@upsala.cz" />
		<Contact name="Vendula Evjáková" tel="734 570 385" mail="vendula@upsala.cz" />
		<Contact name="Vít Veit" tel="606 515 651" mail="vit@upsala.cz" />
	</div>
</LeadContainer>
<StyledForm label="Kontaktujte nás" subject="Kontaktujte nás" descriptionLabel="Zpráva" isArch={false}/>

<style>
	.contact-container {
		display: flex;
		flex-wrap: wrap;

		justify-content: center;
		position: relative;
		width: 100%;
	}
</style>
