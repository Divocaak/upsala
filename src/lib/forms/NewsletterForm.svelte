<script>
	import NewForm from './NewForm.svelte';
	import LandingText from '$lib/containers/LandingText.svelte';
</script>

<LandingText
	text="Připojte se k našemu newsletteru,<br>novinky, inspirace a tipy přímo do vaší schránky."
/>
<NewForm>
	<div class="wrapper">
		<input id="mail" name="$mail" type="email" placeholder="Email*" required />
		<input type="submit" value="Odeslat zprávu" />
	</div>
</NewForm>

<style>
	.wrapper {
		position: relative;
		display: flex;
		flex-direction: row;
		justify-content: center;

		width: 50%;

		margin: 0 auto;
		margin-top: 5rem;
	}

	#mail {
		width: 100%;
	}

	@media screen and (max-width: 900px) {
		.wrapper {
			padding: 0 var(--general-px);
			width: calc(100% - 2 * var(--general-px));
			flex-direction: column;
		}

		#mail {
			position: relative;
			width: initial;
		}
	}
</style>
