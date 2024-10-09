<script>
	export let title = null;
	export let text = null;
	export let textSmall = null;
	export let contact = false;
	export let paddedTitle = false;
</script>

<div class="container">
	{#if paddedTitle}
		<div class="padded-title">
			<h1>{title}</h1>
		</div>
	{/if}
	<div class="wrapper">
		{#if !paddedTitle}
			<div class="title">
				<h1>{title}</h1>
			</div>
		{/if}
		{#if contact}
			<p class="contact">
				UPSALA, s.r.o. <br />
				Jakubská 1, 602 00 Brno
			</p>
		{/if}
		<div class="text" class:padded={paddedTitle}>
			{#if text != null}
				<p class="prim-text">{text}</p>
			{/if}
			{#if textSmall != null}
				<p class="sec-text">{textSmall}</p>
			{/if}
			<slot></slot>
		</div>
	</div>
</div>

<style>
	.container {
		position: relative;
		width: 100%;

		margin-top: 20vh;
		padding-bottom: 300px;
	}
	.wrapper {
		align-items: start;
		display: flex;
		flex-direction: row;

		padding: 0 38px;
	}

	.padded-title,
	.title {
		padding: 0 38px;
	}

	.title {
		width: 60%;
	}

	.padded-title {
		width: 100%;
	}

	.title h1,
	.padded-title h1 {
		font-size: var(--text-96);
		text-transform: uppercase;
		font-weight: 600;
		line-height: 93%;
		letter-spacing: 1px;

		color: var(--black);

		white-space: pre-line;
	}

	.contact {
		padding-top: 100px;
		font-size: var(--text-36);
		width: 60%;
	}

	.text {
		width: 40%;

		padding-right: 38px;
		margin-top: 40px;

		white-space: pre-line;
	}

	.text.padded{
		padding-left: 60%;
	}

	.prim-text {
		font-size: var(--text-32);
	}

	.sec-text {
		font-size: var(--text-32);

		padding-bottom: 100px;
	}

	@media screen and (max-width: 1200px) {
		.wrapper {
			flex-direction: column;
		}

		.text, .contact{
			width: 100%;
			padding: 0;
		}

		.text.padded{
			padding-left: 0;
		}

		.padded-title,
		.title,
		.text {
			padding: 0;
			width: 100%;
		}

		.title h1,
		.padded-title h1,
		.text p {
			padding: 0 38px;
		}
	}

	@media screen and (min-width: 800px) and (max-width: 1200px) {
		.text {
			width: 70%;
		}
	}
</style>
