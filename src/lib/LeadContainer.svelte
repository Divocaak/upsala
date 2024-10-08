<script>
	export let title = null;
	export let text = null;
	export let textSmall = null;
	export let contact = false;
</script>

<div class="wrapper">
	<div class="title">
		<h1>{title}</h1>
		{#if contact}
			<p class="contact">
				UPSALA, s.r.o. <br />
				Jakubská 1, 602 00 Brno
			</p>
		{/if}
	</div>
	<div class="text">
		{#if text != null}
			<p class="prim-text">{text}</p>
		{/if}
		{#if textSmall != null}
			<p class="sec-text">{textSmall}</p>
		{/if}
		<slot></slot>
	</div>
</div>

<style>
	.wrapper {
		position: relative;
		margin-top: 20vh;

		width: 100%;

		align-items: start;
		display: flex;
		flex-direction: row;

		padding-bottom: 300px;
	}

	.title {
		width: 60%;

		padding: 0 38px;
	}

	.title h1 {
		font-size: var(--text-96);
		text-transform: uppercase;
		font-weight: 600;
		line-height: 93%;
		letter-spacing: 1px;

		color: var(--black);

		white-space: pre-line;
	}

	.title .contact {
		padding-top: 100px;
		font-size: var(--text-64);
	}

	.text {
		width: 40%;

		padding-right: 38px;
		margin-top: 40px;

		white-space: pre-line;
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

		.title,
		.text {
			padding: 0;
			width: 100%;
		}

		.title h1, .title .contact,
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
