<script>
	export let text = 'lorem ipsum';
</script>

<p>{@html text}</p>

<style>
	p {
		font-weight: 400;
		font-size: var(--text-64);
		line-height: 130%;
		text-align: center;
        
        max-width: 60%;
        margin: 0 auto;
	}
</style>
