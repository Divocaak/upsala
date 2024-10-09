<script>
	export let label;
	export let text;
</script>

<div class="wrapper">
	<p><span>{label}</span></p>
	<p>{text}</p>
</div>

<style>
	.wrapper {
		margin-bottom: 50px;
	}

	.wrapper p {
		font-size: var(--text-32);
	}

    .wrapper p span{
        padding-bottom: 14px;
        border-bottom: 1px solid var(--black);
    }

	.wrapper p:first-of-type {

		margin-top: 0 !important;
		padding-top: 0 !important;
	}
</style>
