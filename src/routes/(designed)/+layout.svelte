<script>
	import Footer from '$lib/Footer.svelte';
	import Navbar from '$lib/Navbar.svelte';
</script>

<Navbar />
<div class="content-wrapper">
	<slot></slot>
</div>
<Footer />

<style>
	.content-wrapper {
		position: relative;
		min-height: 100dvh;

		bottom: 0;
		/* margin-top: -89px; */
		/* padding-top: 90px; */
		padding-top: calc(90px + env(safe-area-inset-top));
	}
</style>
