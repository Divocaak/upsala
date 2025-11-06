<script>
	import { onMount } from 'svelte';
	export let text =
		'Your long single-line scrolling text goes here — replace this with your content.';
	export let speed = 50;
	export let pauseOnHover = false;

	let container;
	let content;
	let duration = 10;

	// ensure text ends with a space for seamless looping
	$: if (text && !text.endsWith(' ')) {
		text = text + ' ';
	}

	function calculateDuration() {
		const contentWidth = content ? content.scrollWidth / 2 : 0;
		if (!contentWidth) return;
		duration = contentWidth / Math.max(1, speed);
		if (duration < 3) duration = 3;
		container?.style.setProperty('--marquee-duration', `${duration}s`);
		container?.style.setProperty('--marquee-distance', `${contentWidth}px`);
	}

	onMount(() => {
		calculateDuration();
		const ro = new ResizeObserver(() => calculateDuration());
		ro.observe(content);
		window.addEventListener('resize', calculateDuration);
		return () => {
			ro.disconnect();
			window.removeEventListener('resize', calculateDuration);
		};
	});
</script>

<div class="marquee">
	<div class="track" bind:this={container} data-pause-on-hover={pauseOnHover}>
		<div class="inner" bind:this={content}>
			<p class="text">{text}</p>
			<p class="text">{text}</p>
		</div>
	</div>
</div>

<style>
	.marquee {
		width: 100%;
		overflow: hidden;
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
	}

	.text {
		flex-shrink: 0;
		display: inline-block;
		white-space: nowrap;

		font-weight: 400;
		font-size: 128px;
		word-spacing: 2rem;
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
