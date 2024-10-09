<script>
	export let label;
	export let text;
</script>

<div class="wrapper">
	<p>{label}</p>
	<p>{text}</p>
</div>

<style>
	.wrapper p:first-of-type {
		font-size: var(--text-32);
		line-height: 150%;

		border-bottom: 1px solid var(--black);
	}

	.wrapper p:last-of-type {
		font-size: var(--text-20);
		line-height: 140%;
	}
</style>
