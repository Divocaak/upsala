<script>
	export let label, text;
	export let topBorder = true;
</script>

<!-- TODO ask plus btns -->
<div class:top-border={topBorder}>
	<p>{label}</p>
	<p>{text}</p>
</div>

<style>
	div {
		position: relative;
		margin: 0 38px;
        align-items: center;
        display: flex;
	}

	p:first-of-type {
		font-weight: 600;
		font-size: 96px;
		line-height: 93%;
		color: var(--thick-text);
		text-transform: uppercase;
        width: 40%;
        display: inline-block;
	}
    
	p:last-of-type {
        font-weight: 400;
		font-size: 32px;
		line-height: 138%;
        width: 60%;
        display: inline-block;
	}

	.top-border {
		border-top: 1px solid #000000;
	}
</style>
