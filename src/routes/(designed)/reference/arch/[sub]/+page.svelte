<script>
	import StyledForm from '$lib/StyledForm.svelte';
	import ArchSub from '$lib/ArchSub.svelte';
	import ArchSubTabButton from '$lib/ArchSubTabButton.svelte';

	export let data;
</script>

<svelte:head>
	<title>projekt arch</title>
</svelte:head>

<div class="tabs-holder">
	<ArchSubTabButton path="archival" label="Archivační" />
	<ArchSubTabButton path="presentational" label="Prezentační" />
	<ArchSubTabButton path="boxes" label="Obaly a Boxy" />
</div>

{#each data.objects as object, i}
	<ArchSub {object} topStrike={i !== 0} />
{/each}

<StyledForm removeFromSuccessPath="/{data.subName}" />

<style>
	.tabs-holder {
		position: relative;
		width: 100%;

		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: start;

		padding: 50px 38px;
	}
</style>
