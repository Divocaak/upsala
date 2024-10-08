<script>
	import StyledForm from '$lib/StyledForm.svelte';
	import ArchSub from '$lib/ArchSub.svelte';

	export let data;
</script>

<svelte:head>
	<title>projekt arch</title>
</svelte:head>

<div class="tabs-holder">
	<a href="/reference/arch/archival">Archivační</a>
	<a href="/reference/arch/presentational">Prezentační</a>
	<a href="/reference/arch/boxes">Obaly a Boxy</a>
</div>

{#each data.objects as object}
	<ArchSub {object} />
{/each}

<StyledForm removeFromSuccessPath="/{data.subName}"/>

<style>
	.tabs-holder {
		position: relative;
		width: 100%;

		display: flex;
		justify-content: center;
		align-items: center;
	}

	.tabs-holder a {
		font-size: var(--text-36);

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
