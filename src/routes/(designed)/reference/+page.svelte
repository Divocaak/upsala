<script>
	import { onMount } from 'svelte';
	import { page } from '$app/state';
	import { goto } from '$app/navigation';
	import WorkTile from '$lib/workTiles/WorkTile.svelte';
	import WorkWrapper from '$lib/workTiles/WorkWrapper.svelte';
	import Filter from '$lib/Filter.svelte';
	import NewsletterForm from '$lib/forms/NewsletterForm.svelte';

	let data = {};
	let archData = null;

	let filters = null;
	let currentFilter = null;

	onMount(async () => {
		const res = await fetch('/dynamic/jsons/data/projects.json');
		data = await res.json();

		const archRes = await fetch('/dynamic/jsons/data/arch.json');
		archData = await archRes.json();

		const responseFilters = await fetch('/dynamic/jsons/data/filters.json');
		const filtersData = await responseFilters.json();
		filters = filtersData.definitions.filterEnums.items.enum;
		currentFilter = page.url.searchParams.get('filter');
	});

	/* const changeFilter = (newFilter = null) => (currentFilter = newFilter); */
	async function changeFilter(newFilter = null) {
		currentFilter = newFilter;

		const url = new URL(page.url);

		if (newFilter) {
			url.searchParams.set(
				'filter',
				newFilter
					.toLowerCase()
					.normalize('NFD')
					.replace(/[\u0300-\u036f]/g, '')
					.replace(/[\u0300-\u036f]/g, '') // Remove diacritic marks
					.replace(/[\d\W_]+/g, '-') // Remove numbers and special characters, replace with "-"
					.replace(/^-+|-+$/g, '')
			);
		} else {
			url.searchParams.delete('filter');
		}

		await goto(url, {
			replaceState: true,
			noScroll: true,
			keepFocus: true
		});
	}
</script>

<svelte:head>
	<title>reference</title>
</svelte:head>

<div class="filters">
	<Filter
		label="bez filtru"
		clickable={true}
		on:click={() => changeFilter()}
		active={!currentFilter}
	/>
	{#if filters}
		{#each filters as filter}
			<Filter
				label={filter}
				clickable={true}
				on:click={() => changeFilter(filter)}
				active={filter === currentFilter}
			/>
		{/each}
	{/if}
</div>
<WorkWrapper>
	{#if data.projects}
		{#each data.projects as project, i}
			{#if currentFilter === null || project.filters.includes(currentFilter)}
				<!-- {#if i === 3 && archData}
					<WorkTile arch={true} archThumbnail={archData.thumbnail} />
				{/if} -->
				{#if project.visible}
					<WorkTile {project} />
				{/if}
			{/if}
		{/each}
		<!-- {#if data.projects.length < 4 && archData}
			<WorkTile arch={true} archThumbnail={archData.thumbnail} />
		{/if} -->
	{/if}
</WorkWrapper>
<NewsletterForm />

<style>
	.filters {
		position: relative;
		height: auto;
		width: calc(100% - calc(2 * var(--general-px)));

		margin: 0px var(--general-px);
	}
</style>
