<script>
	import { onMount } from 'svelte';

	export let speed = 50;
	export let pauseOnHover = false;

	let container;
	let content;
	let duration = 10;
	let repeatedCount = 1;

	function calculateRepeatedCount() {
		if (!content || !container) return;
		const containerWidth = container.offsetWidth;
		const contentWidth = content.scrollWidth / repeatedCount || 1;
		repeatedCount = Math.ceil((containerWidth * 2) / contentWidth);
	}

	function calculateDuration() {
		if (!content) return;
		const contentWidth = content.scrollWidth / repeatedCount;
		duration = contentWidth / Math.max(1, speed);
		if (duration < 3) duration = 3;
		container?.style.setProperty('--marquee-duration', `${duration}s`);
		container?.style.setProperty('--marquee-distance', `${contentWidth}px`);
	}

	onMount(() => {
		calculateRepeatedCount();
		calculateDuration();

		const ro = new ResizeObserver(() => {
			calculateRepeatedCount();
			calculateDuration();
		});
		ro.observe(container);
		window.addEventListener('resize', () => {
			calculateRepeatedCount();
			calculateDuration();
		});
		return () => {
			ro.disconnect();
			window.removeEventListener('resize', calculateRepeatedCount);
		};
	});
</script>

<div class="marquee">
	<div class="track" bind:this={container} data-pause-on-hover={pauseOnHover}>
		<div class="inner" bind:this={content}>
			{#each Array(repeatedCount) as _, i}
				<slot />
			{/each}
		</div>
	</div>
</div>

<style>
	.marquee {
		width: 100%;
		overflow-x: hidden;
		overflow-y: visible;
		box-sizing: border-box;
		cursor: default;
	}

	.track {
		display: flex;
		align-items: center;
		--marquee-duration: 10s;
		--marquee-distance: 100%;
		position: relative;
	}

	.inner {
		display: flex;
		white-space: nowrap;
		will-change: transform;
		animation: scroll var(--marquee-duration) linear infinite;
		align-items: flex-start;
	}

	.inner > * {
		white-space: normal !important;
		display: inline-flex;
		align-items: flex-start;
	}

	@keyframes scroll {
		0% {
			transform: translateX(0);
		}
		100% {
			transform: translateX(calc(-50%));
		}
	}

	.track[data-pause-on-hover='true']:hover .inner {
		animation-play-state: paused;
	}
</style>
