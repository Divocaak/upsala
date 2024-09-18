<script>
	export let label;
</script>

<div><h2>{label}</h2></div>

<style>
	h2 {
		font-weight: 500;
		font-size: var(--text-20);
		line-height: 138%;
		letter-spacing: .5px;
		
		text-transform: uppercase;
		color: var(--thick-text);
	}

	div {
		position: relative;
		border-bottom: 1px solid #000000;
		margin: 0 38px;
	}
</style>
