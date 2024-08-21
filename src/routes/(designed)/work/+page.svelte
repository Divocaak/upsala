<script>
	import WorkTile from '$lib/WorkTile.svelte';
</script>

<div class="container">
	<WorkTile path="work/0" label="Kalina Gallery & Apartments" media="/_placeholders/2.jpg" />
	<WorkTile path="work/0" label="Kalina Gallery & Apartments" media="/_placeholders/2.jpg" />
	<WorkTile path="work/0" label="Kalina Gallery & Apartments" media="/_placeholders/2.jpg" />
	<WorkTile path="work/arch" label="Projekt ARCH" media="/_placeholders/2.jpg"  arch={true}/>
	<WorkTile path="work/0" label="Kalina Gallery & Apartments" media="/_placeholders/2.jpg" />
	<WorkTile path="work/0" label="Kalina Gallery & Apartments" media="/_placeholders/2.jpg" />
	<WorkTile path="work/0" label="Kalina Gallery & Apartments" media="/_placeholders/2.jpg" />
	<WorkTile path="work/0" label="Kalina Gallery & Apartments" media="/_placeholders/2.jpg" />
</div>

<style>
	.container {
        padding: 100px;

		display: grid;
		grid-template-columns: repeat(3, 1fr);
		grid-auto-rows: minmax(300px, auto);
		gap: 100px 40px;
	}
</style>
