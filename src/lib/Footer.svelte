<footer>
	<p>studio<span></span>upsala 2024</p>
	<div>
		<a href="https://facebook.com/upsalagraphicdesign/" target="_blank">Facebook</a>
		<a href="https://instagram.com/upsala.cz/" target="_blank">Instagram</a>
	</div>
</footer>

<style>
	footer {
		align-items: center;
		display: flex;
		flex-direction: row;
		justify-content: space-between;

		border-top: 1px solid #000000;
		margin: 0 38px;

		position: relative;
		bottom: 0;
		width: calc(100% - 2 * 38px);
	}

	footer p span {
		display: inline-block;
		position: relative;
		top: 2px;

		height: 15px;
		width: 15px;
		background-color: var(--black);
		border-radius: 50%;

		margin: 0 5px;
	}

	footer div a:first-of-type {
		padding-right: 20px;
	}

	@media screen and (max-width: 600px){
		footer{
			flex-direction: column;
		}
	}
</style>
