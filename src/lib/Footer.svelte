<script>
	import { page } from '$app/stores';

	const year = new Date().getFullYear();
</script>

<div class="spacer" class:colorBg={$page.data.colorFooter}></div>
<footer class:colorBg={$page.data.colorFooter}>
	<p>studio<span></span>upsala {year}</p>
	<div class="links">
		{#if $page.url.pathname == '/kontakt'}
			<a href="/cookies">Cookies</a>
		{/if}
		<a href="https://facebook.com/upsalagraphicdesign/" target="_blank">Facebook</a>
		<a href="https://instagram.com/upsala.cz/" target="_blank">Instagram</a>
	</div>
</footer>

<style>
	.spacer {
		width: 100%;
		height: 90px;
		margin: 0;
		padding: 0;
	}

	.colorBg {
		background-color: var(--form-bg);
	}

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

	footer .links a {
		padding: 0 10px;
	}

	@media screen and (max-width: 900px) {
		footer {
			align-items: start;
			align-items: baseline;

			padding-bottom: var(--general-px);
		}

		.links {
			display: flex;
			flex-direction: column;
		}
	}
</style>
