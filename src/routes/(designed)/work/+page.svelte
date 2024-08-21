<script>
	import WorkTile from '$lib/WorkTile.svelte';
</script>

<div class="container">
	<WorkTile label="Kalina Gallery & Apartments" media="/_placeholders/2.jpg" mediaAlt="" />
	<WorkTile label="Kalina Gallery & Apartments" media="/_placeholders/2.jpg" mediaAlt="" />
	<WorkTile label="Kalina Gallery & Apartments" media="/_placeholders/2.jpg" mediaAlt="" />
	<WorkTile label="Projekt ARCH" media="/_placeholders/2.jpg" mediaAlt="" arch={true}/>
	<WorkTile label="Kalina Gallery & Apartments" media="/_placeholders/2.jpg" mediaAlt="" />
	<WorkTile label="Kalina Gallery & Apartments" media="/_placeholders/2.jpg" mediaAlt="" />
	<WorkTile label="Kalina Gallery & Apartments" media="/_placeholders/2.jpg" mediaAlt="" />
	<WorkTile label="Kalina Gallery & Apartments" media="/_placeholders/2.jpg" mediaAlt="" />
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
