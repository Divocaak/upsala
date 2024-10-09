<script>
	import HalfsLayout from '$lib/containers/HalfsLayout.svelte';

	export let title = null;
	export let text = null;
	export let textSmall = null;
	export let contact = false;
	export let paddedTitle = false;
	export let imgPath = null;
</script>

<div class="container">
	{#if paddedTitle}
		<div class="padded-title">
			<h1>{title}</h1>
		</div>
	{/if}
	<HalfsLayout>
		<div slot="l">
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
			{#if imgPath}
				<div class="media-wrapper">
					<img src={imgPath} alt="container gpx" />
				</div>
			{/if}
		</div>
		<div slot="r" class="text">
			{#if text != null}
				<p class="prim-text">{text}</p>
			{/if}
			{#if textSmall != null}
				<p class="sec-text">{textSmall}</p>
			{/if}
			<slot></slot>
		</div>
	</HalfsLayout>
</div>

<style>
	.container {
		width: calc(100% - (38px * 2));
		margin: 0 38px;

		margin-top: 15vh;
		padding-bottom: 200px;
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

	.media-wrapper {
		width: 60%;
	}

	.media-wrapper img {
		position: relative;
		width: 100%;
		height: auto;
	}

	.contact {
		padding-top: 100px;
		font-size: var(--text-36);
		width: 60%;
	}

	.text {
		padding-right: 38px;

		white-space: pre-line;
	}

	.prim-text {
		font-size: var(--text-32);
	}

	.sec-text {
		font-size: var(--text-32);

		padding-bottom: 100px;
	}
</style>
