<script>
	import ArchButton from '$lib/ArchButton.svelte';
	import ArchSub from '$lib/ArchSub.svelte';

	export let data;
</script>

<div class="tabs-holder">
	<a href="/work/arch/archival">Archivační</a>
	<a href="/work/arch/presentational">Prezentační</a>
	<a href="/work/arch/boxes">Obaly a Boxy</a>
</div>

{#each data.objects as object}
	<ArchSub subName={data.subName} id={object.id} object={object} />
{/each}

<ArchButton />

<style>
	.tabs-holder {
		position: relative;
		width: 100%;

		display: flex;
		justify-content: center;
		align-items: center;
	}

	.tabs-holder a {
		font-weight: 400;
		font-size: var(--text-36);
		line-height: 138%;

		margin: 0 10vw;
	}

	@media screen and (max-width: 600px) {
		.tabs-holder {
			flex-direction: column;
		}

		.tabs-holder a {
			margin: auto;

			margin-top: 2vh;
		}
	}
</style>
