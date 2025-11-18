<script>
	import { onMount } from 'svelte';
	import { PUBLIC_RECAPTCHA_SITE_KEY } from '$env/static/public';

	export let subject;
	export let text;

	let grecaptchaReady = false;

	let showModal = false;
	let modalMessage = 'Odesílání...';

	onMount(() => {
		if (!window.grecaptcha) {
			const script = document.createElement('script');
			script.src = `https://www.google.com/recaptcha/api.js?render=${PUBLIC_RECAPTCHA_SITE_KEY}`;
			script.async = true;
			script.defer = true;
			script.onload = () => {
				grecaptchaReady = true;
				console.log('reCAPTCHA v3 loaded');
			};
			document.body.appendChild(script);
		} else {
			grecaptchaReady = true;
		}
	});

	const handleSubmit = async (event) => {
		event.preventDefault();

		if (!grecaptchaReady) {
			alert('Načítám reCaptcha');
			return;
		}

		showModal = true;
		modalMessage = 'Odesílání...';

		await new Promise((resolve) => {
			if (window.grecaptcha) resolve();
			else {
				const interval = setInterval(() => {
					if (window.grecaptcha) {
						clearInterval(interval);
						resolve();
					}
				}, 50);
			}
		});

		const token = await grecaptcha.execute(PUBLIC_RECAPTCHA_SITE_KEY, {
			action: 'submit'
		});

		const form = event.target;
		const formData = new FormData(form);

		const data = Object.fromEntries(formData.entries());
		const textData = text + formDataToText(data);

		try {
			const res = await fetch('/api/send', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ subject, text: textData, recaptcha: token })
			});

			const result = await res.json();

			if (res.ok) {
				modalMessage = 'Požadavek odeslán!';
				form.reset();
			} else {
				modalMessage = `Error: ${result.error || 'Někde se stala chyba'}`;
			}
		} catch (err) {
			modalMessage = `Error: ${err.message}`;
		}

		setTimeout(() => {
			showModal = false;
		}, 2000);
	};

	function formDataToText(obj) {
		return Object.entries(obj)
			.map(([key, value]) => `${key}: <b>${value}</b><br/>`)
			.join('\n');
	}
</script>

<form on:submit={handleSubmit}>
	<slot></slot>
</form>

{#if showModal}
	<div class="modal-backdrop">
		<div class="modal-content">
			<p>{@html modalMessage}</p>
		</div>
	</div>
{/if}

<style>
	:global(.grecaptcha-badge) {
		left: 99% !important;
		top: 98% !important;
		opacity: 0.5;
		transform: scale(0.25);
		transform-origin: 0 0;
	}

	form {
		display: flex;
		flex-direction: column;
	}

	/* Modal backdrop */
	.modal-backdrop {
		position: fixed;
		top: 0;
		left: 0;
		width: 100vw;
		height: 100vh;
		background: rgba(0, 0, 0, 0.4);
		display: flex;
		align-items: center;
		justify-content: center;
		z-index: 1000;
	}

	/* Modal box */
	.modal-content {
		background: #fff;
		padding: 1.5rem 2rem;
		/* border-radius: 8px; */
		box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
		max-width: 90%;
		text-align: center;
		font-size: 1rem;
	}

	:global(input, textarea) {
		position: relative;
		/* width: 100%; */
		border-radius: 0;
		border: 1px solid var(--black);
		margin: 0;
		padding: 20px;
	}

	:global(label, input, textarea) {
		font-family: 'SuisseIntl';
		font-weight: 400;
		font-size: var(--text-20);
		line-height: 130%;
		letter-spacing: 0%;
	}

	:global(input:nth-of-type(2)) {
		border-top: 0px;
		border-bottom: 0px;
	}

	:global(input:focus, textarea:focus) {
		outline: none;
	}

	:global(input[type='submit']) {
		background-color: var(--black);
		color: var(--form-bg);
		transition: 0.25s ease-in-out;
	}

	:global(input[type='submit']:hover) {
		background-color: var(--pink);
		border: 1px solid var(--pink);
	}
</style>
