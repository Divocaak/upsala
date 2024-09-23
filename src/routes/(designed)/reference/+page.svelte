<script>
	import WorkTile from '$lib/WorkTile.svelte';
	import WorkWrapper from '$lib/WorkWrapper.svelte';
	import { onMount } from 'svelte';
	import Filter from '$lib/Filter.svelte';
	import { fade } from 'svelte/transition';

	let data = {};
	let filters = {};
	onMount(async () => {
		const res = await fetch('/dynamic/jsons/data/projects.json');
		data = await res.json();
		const responseFilters = await fetch('/dynamic/jsons/data/filters.json');
		filters = await responseFilters.json();
	});

	let showFilters = false;
	const switchFilters = () => (showFilters = !showFilters);

	let currentFilter = null;
	const changeFilter = (newFilter = null) => (currentFilter = newFilter);
</script>

<div class="filters">
	<svg
		on:click={() => switchFilters()}
		width="31"
		height="23"
		viewBox="0 0 31 23"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path d="M31 0H0V4.32428H31V0Z" />
		<path d="M5.26429 8.6485H25.736V13.5905H5.26429V8.6485Z" />
		<path d="M8.1888 17.9148H22.8114V22.2391H8.1888V17.9148Z" />
	</svg>
	{#if showFilters}
		<div transition:fade>
			<Filter label="bez filtru" clickable={true} on:click={() => changeFilter()} />
			{#if filters.filters}
				{#each filters.filters as filter}
					<Filter label={filter} clickable={true} on:click={() => changeFilter(filter)} />
				{/each}
			{/if}
		</div>
	{/if}
</div>
<WorkWrapper>
	{#if data.projects}
		{#each data.projects as project, i}
			{#if currentFilter === null || project.filters.includes(currentFilter)}
				{#if i == 3}
					<WorkTile arch={true} />
				{/if}
				<WorkTile {project} />
			{/if}
		{/each}
		{#if data.projects.length < 4}
			<WorkTile arch={true} />
		{/if}
	{/if}
</WorkWrapper>

<style>
	.filters {
		position: relative;
		height: 23px;
		width: 100%;

		padding-left: 35px;
		padding-top: 35px;
		padding-bottom: 10px;
	}

	.filters svg {
		padding-right: 25px;
		cursor: pointer;

		fill: #d9d9d9;

		transition: 0.45s all;
	}

	.filters svg:hover {
		fill: var(--pink);
	}

	.filters div {
		all: unset;
		position: relative;
		top: -5px;
	}
</style>
