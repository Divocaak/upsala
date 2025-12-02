<script>
	import { onMount } from 'svelte';
	import LeadContainer from '$lib/containers/LeadContainer.svelte';
	import NewForm from '$lib/forms/NewForm.svelte';
	import RunningText from '$lib/runningElements/RunningText.svelte';
	import AddSubscription from '$lib/forms/AddSubscription.svelte';
	import HalfsLayout from '$lib/containers/HalfsLayout.svelte';

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
<div class="wrapper">
	<HalfsLayout leftWidth="50" rightWidth="50">
		<div slot="l">
			<div class="image-wrapper">
				<img src={data.landingImage} alt="cover" />
			</div>
		</div>
		<div slot="r">
			<p class="lead">{data.leading}</p>
			<p class="name padded-top">Tomáš Zahradníček</p>
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
			<p class="name padded-top">Máte dotaz?</p>
			<NewForm subject="Nový dotaz" text="<h1>Ze stránky kontakt přišel nový dotaz:</h1>">
				<input id="name" name="$name" type="text" placeholder="Jméno Příjmení*" required />
				<input id="mail" name="$mail" type="email" placeholder="Email*" required />
				<textarea id="message" name="$message" placeholder="Zpráva*" rows="7" required></textarea>
				<input type="submit" value="Odeslat zprávu" />
				<AddSubscription />
			</NewForm>
		</div>
	</HalfsLayout>
</div>
<RunningText text={data.runningText} />

<style>
	.wrapper {
		padding: 0 var(--general-px);
		width: calc(100% - 2 * var(--general-px));
	}

	.image-wrapper {
		position: relative;
		aspect-ratio: 1/1;
		width: 80%;
	}

	.image-wrapper img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		display: block;
	}

	.lead {
		font-size: var(--text-48);
		line-height: 130%;
		letter-spacing: 0%;
	}

	.padded-top {
		padding-top: calc(3 * var(--general-px));
	}

	.invoice {
		position: relative;
		width: 100%;
		height: 100%;

		display: flex;
		flex-direction: row;

		padding-top: calc(2 * var(--general-px));
	}

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
</style>
