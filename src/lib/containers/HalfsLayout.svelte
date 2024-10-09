<div class="wrapper">
	<div class="half"><slot name="l"></slot></div>
	<div class="half"><slot name="r"></slot></div>
</div>

<style>
	.wrapper {
		position: relative;
		width: 100%;
		height: 100%;

		display: flex;
		flex-direction: row;
	}

	.half:first-of-type {
		width: 60%;
	}

	.half:last-of-type {
		width: 40%;
	}

	@media screen and (max-width: 1200px) {
		.wrapper {
			flex-direction: column;
		}

		.half {
			width: 100% !important;
		}
	}
</style>
