<script>
	import Contact from '$lib/Contact.svelte';
	import LeadContainer from '$lib/LeadContainer.svelte';
</script>

<LeadContainer title="Contact" contact={true}>
	<div class="contact-container">
		<Contact name="Tomáš Zahradníček" tel="604 924 084" mail="upsala@upsala.cz" />
		<Contact name="Vendula Evjáková" tel="734 570 385" mail="vendula@upsala.cz" />
		<Contact name="Vít Veit" tel="606 515 651" mail="vit@upsala.cz" />
	</div>
</LeadContainer>

<style>
	.lead {
		position: relative;
		width: 100%;
		padding: 20vh 0;

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
	}
</style>
