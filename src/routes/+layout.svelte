<script>
	import { onMount } from 'svelte';

	let cursorX = 0;
	let cursorY = 0;
	let isMoving = false;

	function handleMouseMove(e) {
		if (!isMoving) {
			isMoving = true;
			requestAnimationFrame(() => {
				cursorX = e.pageX;
				cursorY = e.pageY;
				isMoving = false;
			});
		}
	}

	onMount(() => {
		window.addEventListener('mousemove', handleMouseMove);

		return () => {
			window.removeEventListener('mousemove', handleMouseMove);
		};
	});
</script>

<div
	class="cursor"
	style="transform: translate(calc(-50% + {cursorX}px), calc(-50% + {cursorY}px));"
></div>
<slot />

<style>
	/* SuisseIntl Black */
	@font-face {
		font-family: 'SuisseIntl';
		src: url('/f_SuisseIntl/SuisseIntl-Black.otf') format('opentype');
		font-weight: 900; /* Black */
		font-style: normal;
	}

	/* SuisseIntl Black Italic */
	@font-face {
		font-family: 'SuisseIntl';
		src: url('/f_SuisseIntl/SuisseIntl-BlackItalic.otf') format('opentype');
		font-weight: 900; /* Black */
		font-style: italic;
	}

	/* SuisseIntl Bold */
	@font-face {
		font-family: 'SuisseIntl';
		src: url('/f_SuisseIntl/SuisseIntl-Bold.otf') format('opentype');
		font-weight: 700; /* Bold */
		font-style: normal;
	}

	/* SuisseIntl Bold Italic */
	@font-face {
		font-family: 'SuisseIntl';
		src: url('/f_SuisseIntl/SuisseIntl-BoldItalic.otf') format('opentype');
		font-weight: 700; /* Bold */
		font-style: italic;
	}

	/* SuisseIntl Light */
	@font-face {
		font-family: 'SuisseIntl';
		src: url('/f_SuisseIntl/SuisseIntl-Light.otf') format('opentype');
		font-weight: 300; /* Light */
		font-style: normal;
	}

	/* SuisseIntl Light Italic */
	@font-face {
		font-family: 'SuisseIntl';
		src: url('/f_SuisseIntl/SuisseIntl-LightItalic.otf') format('opentype');
		font-weight: 300; /* Light */
		font-style: italic;
	}

	/* SuisseIntl Medium */
	@font-face {
		font-family: 'SuisseIntl';
		src: url('/f_SuisseIntl/SuisseIntl-Medium.otf') format('opentype');
		font-weight: 500; /* Medium */
		font-style: normal;
	}

	/* SuisseIntl Medium Italic */
	@font-face {
		font-family: 'SuisseIntl';
		src: url('/f_SuisseIntl/SuisseIntl-MediumItalic.otf') format('opentype');
		font-weight: 500; /* Medium */
		font-style: italic;
	}

	/* SuisseIntl Regular */
	@font-face {
		font-family: 'SuisseIntl';
		src: url('/f_SuisseIntl/SuisseIntl-Regular.otf') format('opentype');
		font-weight: 400; /* Regular */
		font-style: normal;
	}

	/* SuisseIntl Regular Italic */
	@font-face {
		font-family: 'SuisseIntl';
		src: url('/f_SuisseIntl/SuisseIntl-RegularItalic.otf') format('opentype');
		font-weight: 400; /* Regular */
		font-style: italic;
	}

	/* SuisseIntl SemiBold */
	@font-face {
		font-family: 'SuisseIntl';
		src: url('/f_SuisseIntl/SuisseIntl-SemiBold.otf') format('opentype');
		font-weight: 600; /* SemiBold */
		font-style: normal;
	}

	/* SuisseIntl SemiBold Italic */
	@font-face {
		font-family: 'SuisseIntl';
		src: url('/f_SuisseIntl/SuisseIntl-SemiBoldItalic.otf') format('opentype');
		font-weight: 600; /* SemiBold */
		font-style: italic;
	}

	/* SuisseIntl Thin */
	@font-face {
		font-family: 'SuisseIntl';
		src: url('/f_SuisseIntl/SuisseIntl-Thin.otf') format('opentype');
		font-weight: 100; /* Thin */
		font-style: normal;
	}

	/* SuisseIntl Thin Italic */
	@font-face {
		font-family: 'SuisseIntl';
		src: url('/f_SuisseIntl/SuisseIntl-ThinItalic.otf') format('opentype');
		font-weight: 100; /* Thin */
		font-style: italic;
	}

	/* SuisseIntl Ultralight */
	@font-face {
		font-family: 'SuisseIntl';
		src: url('/f_SuisseIntl/SuisseIntl-Ultralight.otf') format('opentype');
		font-weight: 200; /* Ultralight */
		font-style: normal;
	}

	/* SuisseIntl Ultralight Italic */
	@font-face {
		font-family: 'SuisseIntl';
		src: url('/f_SuisseIntl/SuisseIntl-UltralightItalic.otf') format('opentype');
		font-weight: 200; /* Ultralight */
		font-style: italic;
	}

	/* Outfit variable */
	@font-face {
		font-family: 'Outfit';
		src: url('/f_Outfit/Outfit-VariableFont_wght.ttf') format('truetype');
		font-weight: 100 900;
		font-style: normal;
	}

	.cursor {
		position: absolute;

		height: 15px;
		width: 15px;

		border-radius: 50%;

		pointer-events: none;

		background-color: var(--black);
		z-index: 10000;

		will-change: transform;
	}

	:global(html) {
		cursor: none !important;
	}

	:global(body) {
		margin: 0;
	}

	:global(:root) {
		--pink: #ff67c2;
		--black: #1d1d1b;
		--border-radius: 5px;
		--link-transition: 0.35s;
		--text-16: calc(8px + (0.926vw * 0.35));
		--text-20: calc(10px + (1.157vw * 0.25));
		--text-24: calc(12px + (1.389vw * 0.15));
		--text-32: calc(16px + (1.852vw * 0.15));
		--text-36: calc(18px + (2.083vw * 0.15));
		--text-64: calc(32px + (3.704vw * 0.15));
		--text-96: calc(48px + (5.556vw * 0.15));
	}

	:global(h1, h2, h3, h4, h5, h6, p, a, button) {
		font-family: 'SuisseIntl', sans-serif;
		font-style: normal;
		font-weight: 300;

		letter-spacing: 0.5px;
		line-height: 145%;

		color: var(--black);
	}

	:global(a) {
		text-decoration: none;
		transition: all var(--link-transition);
		cursor: none;
	}

	:global(a:hover) {
		color: var(--pink);
	}
</style>
