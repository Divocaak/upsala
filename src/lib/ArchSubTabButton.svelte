<script>
	import { page } from '$app/stores';

	export let label, path;
	$: isOnPath = $page.url.pathname.endsWith(path);
</script>

<a href="/reference/arch/{path}" class:active={isOnPath}>
	{#if isOnPath}<span></span>{/if}{label}
</a>

<style>
	a {
		font-size: var(--text-36);
	}

	a.active {
		color: var(--pink);
	}

	span {
		display: inline-block;
		position: relative;

		height: 15px;
		width: 15px;
		background-color: var(--pink);
		border-radius: 50%;

		margin: 0 5px;
	}
</style>
