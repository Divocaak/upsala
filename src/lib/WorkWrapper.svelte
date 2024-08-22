<div class="container">
    <slot></slot>
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
