<div class="container">
    <slot></slot>
</div>

<style>
	.container {
        padding: 100px;
		
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		grid-auto-rows: minmax(300px, auto);
		gap: 5.787vw 2.97vh;
	}
	
	@media screen and (max-width: 900px) {
		.container{
			grid-template-columns: repeat(1, 1fr);
			padding: 38px;
		}
	}

	@media screen and (min-width: 901px) and (max-width: 1200px) {
		.container{
			grid-template-columns: repeat(2, 1fr);
		}
	}
</style>
