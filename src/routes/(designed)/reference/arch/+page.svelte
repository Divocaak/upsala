<script>
	import LeadContainer from '$lib/containers/LeadContainer.svelte';
	import StyledForm from '$lib/StyledForm.svelte';
	import ArchSub from '$lib/ArchSub.svelte';
	import ArchSubTabButton from '$lib/ArchSubTabButton.svelte';

	export let data;

	let currentKey = 'archival';
	const changeKey = (newKey) => (currentKey = newKey);
</script>

<svelte:head>
	<title>projekt arch</title>
</svelte:head>

<LeadContainer
	title="Projekt ARCH"
	text="Chcete, aby vaše práce zaujala na první pohled? Klíčem je profesionální prezentace, a my víme, jak na ni. V naší nabídce najdete osvědčená řešení z kvalitních materiálů, na které se můžete spolehnout. Stačí si vybrat typ přebalu, formát a odhad počtu kusů - o zbytek se postaráme."
>
	<div class="tabs-holder" slot="l">
		<ArchSubTabButton
			on:click={() => changeKey('archival')}
			active={currentKey === 'archival'}
			label="Archivační"
		/>
		<ArchSubTabButton
			on:click={() => changeKey('presentational')}
			active={currentKey === 'presentational'}
			label="Prezentační"
		/>
		<ArchSubTabButton
			on:click={() => changeKey('boxes')}
			active={currentKey === 'boxes'}
			label="Obaly a Boxy"
		/>
	</div>
</LeadContainer>
<div class="tabs-holder-sm">
	<ArchSubTabButton
		on:click={() => changeKey('archival')}
		active={currentKey === 'archival'}
		label="Archivační"
	/>
	<ArchSubTabButton
		on:click={() => changeKey('presentational')}
		active={currentKey === 'presentational'}
		label="Prezentační"
	/>
	<ArchSubTabButton
		on:click={() => changeKey('boxes')}
		active={currentKey === 'boxes'}
		label="Obaly a Boxy"
	/>
</div>

{#each data.objects[currentKey] as object, i}
	<ArchSub {object} topStrike={i !== 0} />
{/each}

<StyledForm />

<style>
	.tabs-holder {
		width: 75%;

		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}

	.tabs-holder-sm{
		padding-left: var(--general-px);
		width: 100%;
	
		display: none;
		flex-direction: column;
		padding-bottom: 40px;
		gap: 5px;
	}

	@media screen and (max-width: 1200px) {
		.tabs-holder {
			display: none;
		}

		.tabs-holder-sm{
			display: flex;
		}
	}
</style>
