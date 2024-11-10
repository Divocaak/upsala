<script>
	import { blur, fade } from 'svelte/transition';

	export let textColor = '#1d1d1b';
	export let transparent = false;

	let menuShown = false;
	const showMenu = (newVal) => (menuShown = newVal);
	
	$: actualTextColor = menuShown? "var(--black)" : textColor;
</script>

<nav style="--nav-color: {actualTextColor};" class:transparent>
	<a class="home" href="/">upsala</a>
	<button on:click={() => showMenu(!menuShown)}>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="32"
			height="32"
			fill={actualTextColor}
			viewBox="0 0 16 16"
		>
			{#if !menuShown}
				<path
					transition:fade
					fill-rule="evenodd"
					d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
				/>
			{:else}
				<path
					transition:fade
					d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"
				/>
			{/if}
		</svg>
	</button>
	<div class="wide-nav">
		<a href="/reference">Reference</a>
		<a href="/studio">Studio</a>
		<a href="/contact">Kontakt</a>
	</div>
</nav>
{#if menuShown}
<div class="small-nav-bg"  transition:blur>
	<div class="small-nav">
		<a on:click={() => showMenu(false)} href="/reference">Reference</a>
		<a on:click={() => showMenu(false)} href="/studio">Studio</a>
		<a on:click={() => showMenu(false)} href="/contact">Kontakt</a>
	</div>
</div>
{/if}

<style>
	a {
		color: var(--nav-color);
	}

	a:hover {
		color: var(--pink);
	}

	nav {
		position: sticky;
		top: 0;
		left: 0;

		display: flex;
		justify-content: space-between;
		align-items: center;

		width: 100%;
		padding: 0;
		margin: 0;

		z-index: 100;

		background-color: white;

		/* padding-bottom: 10px; */
		padding: calc(var(--general-px) / 4) 0;
	}

	.transparent {
		background: transparent;
	}

	nav .wide-nav {
		padding-right: var(--general-px);
	}

	nav .wide-nav a {
		font-size: 40px;
	}

	nav .wide-nav a:nth-of-type(2) {
		padding: 0 40px;
	}

	.home {
		font-size: 40px;
		font-weight: 450;

		padding-left: var(--general-px);
	}

	nav button {
		all: unset;
		display: none;

		padding-right: 15px;
	}

	.small-nav-bg{
		position: fixed;
		width: 100%;
		height: 100%;
	
		top: 0;
		left: 0;
	
		z-index: 90;
		background-color: white;

	}

	.small-nav {
		padding-left: var(--general-px);

		display: flex;
		flex-direction: column;
		justify-content: center;

		height: 50%;
	}

	.small-nav a {
		padding-top: calc(var(--general-px) *2);
		font-size: 40px;
	}

	@media screen and (max-width: 600px) {
		nav{
			padding: calc(var(--general-px) / 2) 0;
		}

		nav .wide-nav {
			display: none;
		}

		nav button {
			display: inline-flex;
		}
	}
</style>
