<script>
	export let leftWidth = 60;
	export let rightWidth = 40;
	export let gap = 0;
</script>

<!-- TODO use with variable widths in /kontakt -->
<div class="wrapper" style="--left-w: {leftWidth}%; --right-w: {rightWidth}%; --gap: {gap}rem;">
	<div class="half">
		<slot name="l"></slot>
	</div>
	<div class="half">
		<slot name="r"></slot>
	</div>
</div>

<style>
	:root {
		--left-w: 60%;
		--right-w: 40%;
		--gap: 0rem;
	}

	.wrapper {
		position: relative;
		width: 100%;
		height: 100%;

		display: flex;
		flex-direction: row;

		gap: var(--gap);
	}

	.half:first-of-type {
		width: var(--left-w);
	}

	.half:last-of-type {
		width: var(--right-w);
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
