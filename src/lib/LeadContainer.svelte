<script>
	export let title, text, textSmall;
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

		/* TODO make block padding variable, reuse at studio page as well */
		padding-bottom: 300px;
	}

	.title{
		display: inline-block;
		position: relative;
		left: 38px;
		width: 70%;
	}

    .title h1{
        font-weight: 600;
		font-size: 96px;
		line-height: 93%;
		text-transform: uppercase;

		color: var(--thick-text);

		white-space: pre-line;
    }

	.text {
		position: relative;
		display: inline-block;

		margin-top: 40px;

		width: 35%;
		right: 38px;

		white-space: pre-line;
	}

	.text p:first-of-type {
		font-weight: 400;
		font-size: 32px;
		line-height: 170%;
	}

	.text p:last-of-type {
		font-weight: 400;
		font-size: 20px;
		line-height: 138%;
	}
</style>
