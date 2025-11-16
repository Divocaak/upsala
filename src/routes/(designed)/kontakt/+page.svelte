<script>
	import { onMount } from 'svelte';
	import LeadContainer from '$lib/containers/LeadContainer.svelte';
	import LandingText from '$lib/containers/LandingText.svelte';
	import NewForm from '$lib/forms/NewForm.svelte';
	import RunningText from '$lib/RunningText.svelte';
	import AddSubscription from '$lib/forms/AddSubscription.svelte';

	let data = {};
	onMount(async () => {
		const res = await fetch('/dynamic/jsons/data/contacts.json');
		data = await res.json();
	});
</script>

<svelte:head>
	<title>kontakt</title>
</svelte:head>

<LeadContainer title="Kontakt" paddedTitle={true} />
<!-- TODO from json -->
<LandingText
	text="Vždy jsme připraveni vzít váš telefon, odpovědět na váš e-mail nebo vás přivítat u našich dveří."
/>
<div class="table">
	<div>
		<p class="name">Tomáš Zahradníček</p>
		<a href="mailto:upsala@upsala.cz">upsala@upsala.cz</a><br />
		<a href="tel:+420604924084">+420&nbsp;604&nbsp;924&nbsp;084</a>
		<div class="invoice">
			<p class="contact">
				UPSALA,&nbsp;s.r.o.<br />
				Jakubská&nbsp;1, 602&nbsp;00&nbsp;Brno
			</p>
			<p>
				IČ:&nbsp;29301441<br />
				DIČ:&nbsp;CZ29301441
			</p>
		</div>
	</div>
	<div>
		<p class="name">Máte dotaz?</p>
		<NewForm>
			<input id="name" name="$name" type="text" placeholder="Jméno Příjmení*" required />
			<input id="mail" name="$mail" type="email" placeholder="Email*" required />
			<textarea id="message" name="$message" placeholder="Zpráva*" rows="7" required></textarea>
			<input type="submit" value="Odeslat zprávu" />
			<AddSubscription />
		</NewForm>
	</div>
</div>
<!-- TODO from json -->
<RunningText text="# studio # kreativita # zkušenosti " />

<style>
	.table,
	.invoice {
		position: relative;
		width: 100%;
		height: 100%;

		display: flex;
		flex-direction: row;
	}

	.table {
		padding: 0 var(--general-px);
		width: calc(100% - 2 * var(--general-px));

		margin-top: 10rem;
	}

	.table div,
	.invoice p {
		position: relative;
		min-width: 50%;
	}

	.name,
	.invoice p {
		font-weight: 400;
		font-size: var(--text-20);
	}

	a {
		font-weight: 400;
		font-size: var(--text-36);

		color: var(--black);
		transition: all var(--link-transition);
	}

	a:hover {
		color: var(--pink);
	}

	@media screen and (max-width: 900px) {
		.table {
			flex-direction: column;
		}
	}
</style>
