<script>
	import WorkTile from '$lib/WorkTile.svelte';
	import WorkWrapper from '$lib/WorkWrapper.svelte';
	import { onMount } from 'svelte';

	let data = {};
	onMount(async () => {
		const res = await fetch('/dynamic/content.json');
		data = await res.json();
	});

	let arch = null;

	let currentFilter = null;
	function changeFilter(newFilter = null) {
		currentFilter = newFilter;
	}
</script>

<div class="filters">
	<svg width="31" height="23" viewBox="0 0 31 23" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M31 0H0V4.32428H31V0Z" fill="#D9D9D9" />
		<path d="M5.26429 8.6485H25.736V13.5905H5.26429V8.6485Z" fill="#D9D9D9" />
		<path d="M8.1888 17.9148H22.8114V22.2391H8.1888V17.9148Z" fill="#D9D9D9" />
	</svg>
	<button class="hoverable" on:click={() => changeFilter()}>bez filtru</button>
	<span>v</span>
	{#if data.filters}
		{#each data.filters as filter}
			<button class="hoverable" on:click={() => changeFilter(filter)}>{filter}</button>
		{/each}
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
		padding-left: 35px;
		padding-top: 35px;
	}

	.filters button,
	span {
		all: unset;

		font-family: 'SuisseIntl';
		font-style: normal;
		font-weight: 400;
		font-size: var(--text-16);
		line-height: 138%;
		padding: 0 5px;
	}

	.filters button {
		text-decoration: underline;
		transition: all 0.35s;
	}

	.filters svg,
	span {
		padding-right: 25px;
	}

	.filters button:hover {
		color: var(--pink);
	}
</style>
