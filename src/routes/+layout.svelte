<!-- TODO dot cursor -->
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

	/* SuisseIntl Book */
	@font-face {
		font-family: 'SuisseIntl';
		src: url('/f_SuisseIntl/SuisseIntl-Book.otf') format('opentype');
		font-weight: 400; /* Book (Regular) */
		font-style: normal;
	}

	/* SuisseIntl Book Italic */
	@font-face {
		font-family: 'SuisseIntl';
		src: url('/f_SuisseIntl/SuisseIntl-BookItalic.otf') format('opentype');
		font-weight: 400; /* Book (Regular) */
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

	:global(:root) {
		--pink: #ff67c2;
		--border-radius: 5px;
		--link-transition: 0.35s;
		--thick-text: #1d1d1b;
		--text-20: calc(12px + 1.157vw);
		--text-24: calc(12px + 1.389vw);
		--text-32: calc(18px + 1.852vw);
		--text-36: calc(10px + 2.083vw);
		--text-64: calc(16px + 3.704vw);
		--text-96: calc(24px + 5.556vw);
	}

	:global(h1, h2, h3, h4, h5, h6, p, a) {
		color: black;
		font-family: 'SuisseIntl', sans-serif;
	}

	:global(a) {
		text-decoration: none;
		transition: all var(--link-transition);
	}

	/* TODO pohrát si, tohle umí každej */
	:global(a:hover) {
		color: var(--pink);
	}

	:global(html, body, div) {
		padding: 0;
		margin: 0;
	}
</style>
