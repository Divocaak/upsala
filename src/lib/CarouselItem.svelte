<script>
	import { goto } from '$app/navigation';

	export let object;

	let isDragging = false;
	let dragThreshold = 5;
	let startX, startY;

	function handlePointerDown(event) {
		isDragging = false;
		startX = event.clientX;
		startY = event.clientY;
	}

	function handlePointerMove(event) {
		if (
			Math.abs(event.clientX - startX) > dragThreshold ||
			Math.abs(event.clientY - startY) > dragThreshold
		) {
			isDragging = true;
		}
	}

	function handlePointerUp() {
		if (!isDragging) {
			goto(`/work/${object.id}`);
		}
	}
</script>

<div
	class="background-wrapper"
	style="background-image: url('{object.homepage.image}')"
	on:pointerdown={handlePointerDown}
	on:pointermove={handlePointerMove}
	on:pointerup={handlePointerUp}
></div>

<style>
	.background-wrapper {
		position: relative;
		width: 100vw;
		height: 100vh;

		background-position: center;
		background-repeat: no-repeat;
		background-size: cover;

		transition: all 0.35s;
	}
</style>
