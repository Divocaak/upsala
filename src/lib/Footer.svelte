<footer>
	<div class="links-mobile">
		<a href="https://facebook.com/upsalagraphicdesign/" target="_blank">Facebook</a>
		<a href="https://instagram.com/upsala.cz/" target="_blank">Instagram</a>
	</div>
	<p>studio<span></span>upsala 2024</p>
	<div class="links-desktop">
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
		margin: 0 var(--general-px);

		position: relative;
		bottom: 0;
		width: calc(100% - 2 * var(--general-px));
	}

	footer p,
	footer div a {
		font-size: var(--text-36);
	}

	footer p span {
		display: inline-block;
		position: relative;

		height: 15px;
		width: 15px;
		background-color: var(--black);
		border-radius: 50%;

		margin: 0 5px;
	}

	footer .links-desktop a:first-of-type {
		padding-right: 20px;
	}

	.links-mobile {
		display: none;
	}

	@media screen and (max-width: 900px) {
		footer {
			flex-direction: column;
			align-items: start;
		}

		.links-desktop {
			display: none;
		}

		.links-mobile {
			display: flex;
			flex-direction: column;
			padding-top: var(--general-px);
		}
	}
</style>
