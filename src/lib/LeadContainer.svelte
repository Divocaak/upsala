<script>
	export let title = null;
	export let text = null;
	export let textSmall = null;
</script>

<div class="wrapper">
	<div class="title">
		<h1>{title}</h1>
		<slot></slot>
	</div>
	<div class="text">
		{#if text != null}
			<p>{text}</p>
		{/if}
		{#if textSmall != null}
			<p>{textSmall}</p>
		{/if}
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
		display: inline-block;
		width: 55%;

		padding-left: 38px;
	}

	.title h1 {
		font-weight: 600;
		font-size: var(--text-96);
		line-height: 93%;
		text-transform: uppercase;

		color: var(--thick-text);

		white-space: pre-line;
	}

	.text {
		display: inline-block;
		width: 45%;

		padding-right: 38px;
		margin-top: 40px;

		white-space: pre-line;
	}

	.text p:first-of-type {
		font-weight: 400;
		font-size: var(--text-32);
		line-height: 170%;
	}

	.text p:last-of-type {
		font-weight: 400;
		font-size: var(--text-20);
		line-height: 138%;
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

		.title h1, .text p{
			margin: 0 38px;
		}
	}
</style>
