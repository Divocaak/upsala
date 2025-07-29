<script>
	import { onMount } from 'svelte';
	import StrikeThroughText from '$lib/StrikeThroughText.svelte';

	export let label = 'nezávazná kalkulace';
	export let subject = 'Poptávka projekt ARCH';
	export let descriptionLabel = 'Popište váš projekt';
	export let isArch = true;

	let href;
	onMount(() => {
		if (typeof window !== 'undefined' && !window.grecaptcha) {
			const script = document.createElement('script');
			script.src = 'https://www.google.com/recaptcha/api.js';
			script.async = true;
			script.defer = true;
			document.head.appendChild(script);
		}

		href = `${window.location.href}/success`;
	});
</script>

<svelte:head>
	<script src="https://www.google.com/recaptcha/api.js" async defer></script>
</svelte:head>

{#if isArch}
	<StrikeThroughText />
{/if}
<div class="bg">
	<p class="label" class:arch={isArch}>{label}</p>
	<form action="https://api.staticforms.xyz/submit" method="post">
		<input type="hidden" name="accessKey" value="29c36e4e-7864-49e3-853e-8cca897dc0bf" />
		<input type="hidden" name="subject" value={subject} />
		<input type="hidden" name="redirectTo" value={href} />
		{#if isArch}
			<label for="type">
				Typ archu
				<select id="type" name="$type">
					<option value="Archivační">Archivační</option>
					<option value="Prezentační">Prezentační</option>
					<option value="Obaly a Boxy">Obaly a boxy</option>
				</select>
			</label>
			<label for="format">
				Formát <span>*</span>
				<input id="format" name="$format" type="text" placeholder="A4" required />
			</label>
			<label for="ammount">
				Přibližný počet kusů <span>*</span>
				<input id="ammount" name="$ammount" type="number" placeholder="10" required />
			</label>
		{/if}
		<label for="name">
			Jméno / Příjmení <span>*</span>
			<input id="name" name="$name" type="text" required />
		</label>
		<label for="mail">
			Email <span>*</span>
			<input id="mail" name="$mail" type="email" required />
		</label>
		<label for="phone">
			Telefon
			<input id="phone" name="$phone" type="tel" />
		</label>
		<label for="description">
			{descriptionLabel}
			<textarea id="description" name="$description" rows="7"></textarea>
		</label>
		<div class="submit-container">
			<input type="submit" value="odeslat" />
		</div>
		<div
			class="g-recaptcha"
			id="g-racaptcha-staticforms"
			data-sitekey="6LdlI5MrAAAAACLLoj32TvSEZyisOdmn96sfb9Zx"
			/>
			<!-- data-sitekey="6LeoidsqAAAAAEk5ZTnaBWpPN8H1u4cxuEfDNzK7" -->
	</form>
</div>

<style>
	form #g-racaptcha-staticforms {
		transform: scale(0.7);
		pointer-events: all !important;
		position: absolute;
		width: min-content;
		bottom: -10px;
		right: -10px;
	}

	.bg {
		background-color: var(--form-bg);
		padding: 25px 0;
	}

	.arch {
		padding-top: 100px;
	}

	.label {
		font-family: 'SuisseIntl';
		font-size: var(--text-36);

		text-align: center;

		padding-bottom: 50px;
	}

	form {
		width: 75%;
		margin: auto;
	}

	label {
		position: relative;

		font-family: 'SuisseIntl', sans-serif;
		font-size: var(--text-32);
		font-weight: 300;

		color: grey;

		border-bottom: 1px solid var(--black);
		padding-bottom: 10px;

		margin: 30px 0;

		display: block;
	}

	label:last-of-type {
		padding-bottom: 0;
	}

	label span {
		color: var(--pink);
	}

	select {
		all: unset;
		color: var(--black);
	}

	input,
	select,
	textarea {
		font-family: 'SuisseIntl', sans-serif;
		font-size: var(--text-32);
		font-weight: 300;
		color: var(--black);
		background-color: var(--form-bg);

		border: none;

		padding: 0;
	}

	input:focus,
	select:focus,
	textarea:focus {
		outline: none;
	}

	input,
	select {
		position: absolute;
		right: 0;

		width: 70%;
		height: 100%;
	}

	textarea {
		position: relative;
		width: 100%;

		resize: vertical;
	}

	.submit-container {
		text-align: center;
	}

	input[type='submit'] {
		position: relative;
		width: unset;
		height: unset;

		font-size: var(--text-32);

		color: var(--black);
		background-color: transparent;

		cursor: pointer;

		transition: all 0.45s;
	}

	input[type='submit']:hover {
		color: var(--pink);
	}

	@media screen and (max-width: 800px) {
		form {
			width: 95%;
		}

		input,
		select {
			width: 50%;
		}
	}
</style>
