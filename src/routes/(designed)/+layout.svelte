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
		min-height: 100vh;

		margin-top: -89px;
		bottom: 0;
		padding-top: 90px;
		padding-bottom: 90px;
	}
</style>
