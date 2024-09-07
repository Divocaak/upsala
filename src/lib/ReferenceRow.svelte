<script>
	export let label, media, mediaAlt;
</script>

<div>
	<p>{label}<img src="/dynamic/imgs/reference/{media}" alt={mediaAlt} /></p>
</div>

<style>

	div{
		margin-left: 65px;
	}

	p {
        width: 50%;
		
		font-weight: 400;
		font-size: var(--text-32);
		line-height: 170%;
        
		padding-left: 20px;
        margin:0;
        
		transition: all .35s;
	}

	p:hover {
		color: #ffffff;
		background-color: var(--pink);
	}

	p:hover img {
		opacity: 1;
	}

	img {
        position: absolute;
        right: 10%;
        margin-top:2.5%;
        
        max-width: 50%;
        height: auto;

		opacity: 0;
        pointer-events: none;
        
        border-radius: var(--border-radius);
        transition: all .35s;
        transition-delay: .2s;
	}
</style>
