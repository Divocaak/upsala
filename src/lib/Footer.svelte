<script>
    export let textColor = "#000000";
</script>

<footer style="--text-color: {textColor};">
	<p>UPSALA grafické studio, Jakubská 1, 602 00 Brno</p>
	<p>2024</p>
</footer>

<style>
	footer {
		position: relative;
		bottom: 0;
		left: 0;
		width: 100%;
		padding: 0;
	}

	footer p {
		color: var(--text-color);
		display: inline-block;
		font-size: 16px;
		line-height: 138%;
		padding: 0px 35px;
	}

	footer p:last-of-type {
		float: right;
	}
</style>
