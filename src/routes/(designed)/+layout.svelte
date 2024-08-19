<nav>
	<a class="home" href="/">upsala</a>
	<div>
		<a href="/work">Work</a>
		<a href="/studio">Studio</a>
		<a href="/contact">Contact</a>
	</div>
</nav>
<slot></slot>
<footer>
	<p>UPSALA grafické studio, Jakubská 1, 602 00 Brno</p>
	<p>2024</p>
</footer>

<!-- TODO white to transparent gradient on footer and nav on all layouts except homepage -->

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

	:global(:root) {
		--pink: #ff67c2;
		--corner-radius: 5;
		--link-transition: 0.35s;
		--thick-text: #1d1d1b;
		/* TODO */
		--strike-color: #6a6a6a;
	}

	:global(h1, h2, h3, h4, h5, h6, p, a) {
		font-family: 'SuisseIntl', sans-serif;
		color: black;
	}

	:global(a) {
		text-decoration: none;
		transition: all var(--link-transition);
	}

	/* TODO pohrát si, tohle umí každej */
	:global(a:hover) {
		color: var(--pink);
	}

	:global(html, body, div){
		padding: 0;
		margin: 0;
	}

	nav {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		padding: 0;
		margin:0;
	}

	nav div {
		position: relative;
		float: right;
		top: 24px;
		right: 35px;
	}

	nav div a {
		font-size: 36px;
		line-height: 138%;
	}
	
	nav div a:nth-of-type(2){
		padding: 0 40px;
	}

	.home {
		position: relative;
		padding: 0;
		margin: 0;
		font-size: 64px;
		line-height: 138%;
		font-weight: normal;
		padding-left: 35px;
	}

	nav > * {
		display: inline-flex;
	}

	footer {
		position: fixed;
		bottom: 0;
		left: 0;
		width: 100%;
		padding: 0;
	}

	footer p {
		display: inline-block;
		font-size: 16px;
		line-height: 138%;
		padding: 0px 35px;
	}

	footer p:last-of-type {
		float: right;
	}
</style>
