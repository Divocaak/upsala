<script>
	import Contact from '$lib/Contact.svelte';
	import LeadContainer from '$lib/containers/LeadContainer.svelte';
	import StyledForm from '$lib/StyledForm.svelte';
	import { onMount } from 'svelte';

	let data = {};
	onMount(async () => {
		const res = await fetch('/dynamic/jsons/data/contacts.json');
		data = await res.json();
	});
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
		{#each data as contact}
			<Contact name={contact.name} tel={contact.tel} mail={contact.mail} />
		{/each}
	</div>
</LeadContainer>
<!-- <StyledForm
	label="Kontaktujte nás"
	subject="Kontaktujte nás"
	descriptionLabel="Zpráva"
	isArch={false}
/> -->

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
