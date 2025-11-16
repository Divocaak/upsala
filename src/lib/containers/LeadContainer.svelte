<script>
	import HalfsLayout from '$lib/containers/HalfsLayout.svelte';

	export let title = null;
	export let text = null;
	export let textSmall = null;
	export let paddedTitle = false;
	export let leftHalfWidth = 60;
	export let rigthHalfWidth = 40;
	export let gap = 0;
</script>

<div class="container">
	{#if paddedTitle}
		<div class="padded-title">
			<h1>{@html title}</h1>
		</div>
	{/if}
	<HalfsLayout leftWidth={leftHalfWidth} rightWidth={rigthHalfWidth} {gap}>
		<div slot="l" class="left">
			{#if !paddedTitle}
				<div class="title">
					<h1>{@html title}</h1>
				</div>
			{/if}
			<slot name="l"></slot>
		</div>
		<div slot="r" class="text">
			{#if text != null}
				<p class="prim-text">{@html text}</p>
			{/if}
			{#if textSmall != null}
				<p class="sec-text">{@html textSmall}</p>
			{/if}
			<slot name="r"></slot>
		</div>
	</HalfsLayout>
</div>

<style>
	.container {
		width: calc(100% - (var(--general-px) * 2));
		margin: 0 var(--general-px);

		margin-top: 15vh;
		padding-bottom: 100px;
	}

	.title {
		width: 80%;
	}

	.title h1,
	.padded-title h1 {
		font-size: var(--text-96);
		font-weight: 600;
		line-height: 110%;
		letter-spacing: 1px;

		color: var(--black);

		white-space: pre-line;

		margin-top: 0 !important;
	}

	.text {
		padding-right: var(--general-px);

		white-space: pre-line;
	}

	.text *:first-child {
		margin-top: 0 !important;
	}

	.prim-text {
		font-size: var(--text-48);
		font-weight: 400;
	}

	.sec-text {
		font-size: var(--text-32);

		padding-bottom: 30px;
	}

	.left {
		position: relative;
		height: 90%;

		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}

	@media screen and (max-width: 1200px) {
		.title {
			width: 100%;
		}
	}
</style>
