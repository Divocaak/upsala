<script>
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';

	let visible = false;

	onMount(() => {
		if (!browser) return;

		const consent = localStorage.getItem('ga-consent');
		if (!consent) {
			visible = true;
		}
	});

	function accept() {
		localStorage.setItem('ga-consent', 'accepted');
		window.dispatchEvent(new Event('ga-consent-changed'));
		visible = false;
	}

	function reject() {
		localStorage.setItem('ga-consent', 'rejected');
		window.dispatchEvent(new Event('ga-consent-changed'));
		visible = false;
	}
</script>

{#if visible}
	<div class="cookie-banner">
		<p>Tento web používá jen nezbytné cookies pro analytické účely</p>
		<div class="actions">
			<button on:click={accept} class="accept">Souhlasím</button>
			<button on:click={reject} class="reject">Nesouhlasím</button>
		</div>
	</div>
{/if}

<style>
	.cookie-banner {
		position: fixed;
		bottom: 0;
		/* left: 50%; */
		right: 0;

		width: 50%;

		background-color: var(--form-bg);
		color: var(--black);

		border-top: 2px solid var(--pink);

		padding: 0 1rem;
		display: flex;
		justify-content: space-between;
		align-items: center;

		z-index: 9999;
	}

	.cookie-banner .actions {
		display: flex;
		gap: 0.5rem;
	}

	.cookie-banner button {
		padding: 0.5rem 1rem;
		border: none;
		background: none;

		cursor: pointer;

		color: var(--pink);
		transition: all var(--link-transition);
	}

	.cookie-banner button:hover {
		opacity: 0.9;
		color: var(--white);
	}

	@media screen and (max-width: 900px) {
        .cookie-banner{
            display: flex;
            flex-direction: column;
            width: 100%;

            left: 0;
		right: 0;
        }
	}
</style>
