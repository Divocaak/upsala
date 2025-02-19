<script>
	import { onMount } from 'svelte';
	import StrikeThroughText from '$lib/StrikeThroughText.svelte';
	import { Recaptcha, recaptcha, observer } from 'svelte-recaptcha-v2';

	export let label = 'nezávazná kalkulace';
	export let subject = 'Poptávka projekt ARCH';
	export let descriptionLabel = 'Popište váš projekt';
	export let isArch = true;

	const googleRecaptchaSiteKey = '6LeoidsqAAAAAEk5ZTnaBWpPN8H1u4cxuEfDNzK7';

	let href;
	onMount(() => {
		href = `${window.location.href}/success`;
	});

	const onCaptchaReady = (event) => {
		console.log('recaptcha init has completed.');
		/* You can enable your form button here. */
	};

	const onCaptchaSuccess = (event) => {
		// userTracker.resolve(event);
		console.log('token received: ' + event.detail.token);
		/* If using checkbox method, you can attach your form logic here, or dispatch your custom event. */
	};

	const onCaptchaError = (event) => {
		console.log('recaptcha init has failed.');
		/* Usually due to incorrect siteKey. Make sure you have the correct siteKey..
     */
	};

	const onCaptchaExpire = (event) => {
		console.log('recaptcha api has expired');
		/* Normally, you wouldn't need to do anything. Recaptcha should reinit itself automatically.
     */
	};

	const onCaptchaClose = (event) => {
		console.log('google decided to challange the user');
		/* This fires when the puzzle frame closes. Usually happens when the user clicks outside the modal frame. */
	};

	const submitHandler = async () => {
		console.log('launching recaptcha');
		recaptcha.execute();

		console.log('pending for google response');
		const event = await Promise.resolve(observer);

		const recaptchaToken = event.detail?.token ? event.detail.token : false;

		if (!recaptchaToken) {
			console.log('recaptcha is NOT OK');
			return false;
		}

		console.log('token retrieved', recaptchaToken);
	};
</script>

<svelte:head>
	<script src="https://www.google.com/recaptcha/api.js" async defer></script>
</svelte:head>

{#if isArch}
	<StrikeThroughText />
{/if}
<div class="bg">
	<p class="label" class:arch={isArch}>{label}</p>
	<form action="https://api.staticforms.xyz/submit" method="post" on:submit|preventDefault={submitHandler}>
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
		<Recaptcha
			sitekey={googleRecaptchaSiteKey}
			badge={'top'}
			size={'invisible'}
			on:success={onCaptchaSuccess}
			on:error={onCaptchaError}
			on:expired={onCaptchaExpire}
			on:close={onCaptchaClose}
			on:ready={onCaptchaReady}
		/>
		<div class="submit-container">
			<input type="submit" value="odeslat" />
		</div>
	</form>
</div>

<style>
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
