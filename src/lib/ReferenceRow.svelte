<script>
	export let label, media, mediaAlt;
</script>

<p>{label}<img src="/dynamic/imgs/{media}" alt={mediaAlt} /></p>

<style>
	p {
		font-weight: 400;
		font-size: 32px;
		line-height: 170%;
        width: 50%;
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
        left: 30%;
        margin-top:2.5%;
        
        max-width: 30%;
        height: auto;

		opacity: 0;
        pointer-events: none;
        
        border-radius: var(--border-radius);
        transition: all .35s;
        transition-delay: .2s;
	}
</style>
