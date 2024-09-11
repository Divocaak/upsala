<script>
	export let textColor = '#000000';
</script>

<footer style="--text-color: {textColor};">
	<p>UPSALA grafické studio, Jakubská&nbsp;1, 602&nbsp;00&nbsp;Brno</p>
	<p>2024</p>
</footer>

<style>
	footer {
		align-items: center;
		display: flex;
		flex-direction: row;
		justify-content: space-between;

		position: relative;
		bottom: 0;
		width: 100%;
	}

	footer p {
		color: var(--text-color);

		font-size: var(--text-16);
		line-height: 138%;
		padding: 0px 35px;
	}
</style>
