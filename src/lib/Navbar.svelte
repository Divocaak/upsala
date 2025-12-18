<script>
	import { fade } from 'svelte/transition';
	import { page } from '$app/stores';
	import { onMount } from 'svelte';

	export let textColor = '#1d1d1b';
	export let transparent = false;

	let menuShown = false;
	const toggleMenu = () => (menuShown = !menuShown);

	let previousY;
	let navVisible = true;

	onMount(() => {
		previousY = window.scrollY;

		const handleScroll = () => {
			const currentY = Math.max(0, window.scrollY);
			navVisible = currentY <= previousY || currentY <= 10;
			previousY = currentY;
		};

		window.addEventListener('scroll', handleScroll, { passive: true });
		return () => window.removeEventListener('scroll', handleScroll);
	});
</script>

{#if navVisible}
	<nav style="--nav-color: {textColor}" transition:fade={{ duration: 250 }} class:transparent>
		<a class="home" href="/">upsala</a>

		<button class="menu-button" on:click={toggleMenu}>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="32"
				height="32"
				fill={textColor}
				viewBox="0 0 16 16"
			>
				{#if !menuShown}
					<path
						d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
					/>
				{:else}
					<path
						d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"
					/>
				{/if}
			</svg>
		</button>

		<div class="wide-nav">
			<a class:active={$page.url.pathname === '/reference'} href="/reference">Reference</a>
			<a class:active={$page.url.pathname === '/graficke-studio-brno'} href="/graficke-studio-brno"
				>Studio</a
			>
			<a class:active={$page.url.pathname === '/kontakt'} href="/kontakt">Kontakt</a>
		</div>
	</nav>
{/if}

{#if menuShown}
	<div class="small-nav-bg" transition:fade={{ duration: 200 }}>
		<div class="small-nav">
			<a on:click={toggleMenu} href="/reference">Reference</a>
			<a on:click={toggleMenu} href="/graficke-studio-brno">Studio</a>
			<a on:click={toggleMenu} href="/kontakt">Kontakt</a>
		</div>
	</div>
{/if}

<style>
	/* Links */
	a {
		color: var(--nav-color);
		transition: all var(--link-transition);
	}

	a:hover {
		color: var(--pink);
	}

	nav .wide-nav a.active {
		color: var(--pink);
	}

	/* Navbar */
	nav {
		position: fixed;
		top: env(safe-area-inset-top);
		left: 0;
		right: 0;
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 100%;
		padding: calc(var(--general-px) / 4) 0;
		z-index: 100;
		background-color: white;
	}

	nav.transparent{
		background: transparent;
	}

	/* Home link */
	.home {
		font-size: 40px;
		font-weight: 450;
		padding-left: var(--general-px);
	}

	/* Wide nav */
	nav .wide-nav {
		padding-right: var(--general-px);
		display: flex;
		gap: 2.5rem;
	}

	nav .wide-nav a {
		font-size: 40px;
	}

	nav .wide-nav a:nth-of-type(2) {
		padding: 0 40px;
	}

	/* Menu button */
	.menu-button {
		all: unset;
		display: none;
		padding-right: 15px;
		cursor: pointer;
	}

	/* Mobile menu */
	.small-nav-bg {
		position: fixed;
		width: 100%;
		height: 100dvh;
		height: -webkit-fill-available;
		top: 0;
		left: 0;
		z-index: 90;
		background-color: white;
	}

	.small-nav {
		padding-left: var(--general-px);
		display: flex;
		flex-direction: column;
		margin-top: 25%;
		height: 100%;
	}

	.small-nav a {
		padding-top: calc(var(--general-px) * 2);
		font-size: 40px;
	}

	/* Responsive */
	@media screen and (max-width: 900px) {
		nav .wide-nav {
			display: none;
		}
		.menu-button {
			display: inline-flex;
		}
	}
</style>
