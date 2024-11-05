<div class="container">
	<slot></slot>
</div>

<style>
	.container {
		padding: var(--general-px);

		display: grid;
		grid-template-columns: repeat(3, 1fr);
		grid-auto-rows: minmax(300px, auto);
		gap: 0 1vh;
	}

	@media screen and (max-width: 900px) {
		.container {
			grid-template-columns: repeat(1, 1fr);
			gap: 0;
		}
	}

	@media screen and (min-width: 901px) and (max-width: 1200px) {
		.container {
			grid-template-columns: repeat(2, 1fr);
		}
	}
</style>
