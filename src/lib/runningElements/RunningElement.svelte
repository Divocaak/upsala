<script>
	import { onMount, onDestroy } from 'svelte';

	export let speed = 50;
	export let pauseOnHover = false;
	export let approximateItemWidth = 250;
	export let draggable = false;

	let container;
	let content;

	let repeatedCount = 1;
	let contentWidth = 1;
	let running = true;

	/* ---------- sizing ---------- */
	function recalc() {
		if (!container || !content) return;

		const oldWidth = contentWidth || 1;

		const containerWidth = container.offsetWidth || 1;
		const oneCopyWidth = content.scrollWidth / Math.max(1, repeatedCount) || 1;

		repeatedCount = Math.max(3, Math.ceil((containerWidth * 3) / oneCopyWidth));

		contentWidth = content.scrollWidth / repeatedCount || 1;

		// remap offset so animation stays continuous
		baseOffset = (baseOffset / oldWidth) * contentWidth || 0;

		container.style.setProperty('--marquee-distance', `${contentWidth}px`);
	}

	let recalcRaf = null;
	function scheduleRecalc() {
		if (recalcRaf) return; // already scheduled

		recalcRaf = requestAnimationFrame(() => {
			recalcRaf = null;
			recalc();
		});
	}

	/* ---------- animation ---------- */
	let raf;
	let lastTs;
	let baseOffset = 0;
	let dragOffset = 0;
	let isDragging = false;

	function animate(ts) {
		if (!lastTs) lastTs = ts;
		const dt = (ts - lastTs) / 1000;
		lastTs = ts;

		if (!isDragging && (running || allowInertia)) {
			baseOffset = (baseOffset + (speed + velocity) * dt) % contentWidth;

			// decay velocity
			velocity *= friction;
			if (Math.abs(velocity) < 1) {
				velocity = 0;
				allowInertia = false; // inertia finished
			}
		}

		const offset = (baseOffset + dragOffset + contentWidth) % contentWidth;
		content.style.transform = `translateX(${-offset}px)`;

		raf = window.requestAnimationFrame(animate);
	}

	function start() {
		if (typeof window === 'undefined') return;
		if (raf) return;
		lastTs = null;
		raf = window.requestAnimationFrame(animate);
	}

	function stop() {
		if (typeof window === 'undefined') return;
		window.cancelAnimationFrame(raf);
		raf = null;
	}

	/* ---------- dragging (pointer events) ---------- */
	let startX = 0;
	let startDrag = 0;
	let activePointer = null;

	let allowInertia = false;
	let velocity = 0; // px / second
	const friction = 0.92; // closer to 1 = longer glide
	let lastMoveX = 0;
	let lastMoveTime = 0;

	function pointerDown(e) {
		if (!draggable || (e.pointerType === 'mouse' && e.button !== 0)) return;

		isDragging = true;
		activePointer = e.pointerId;
		startX = e.clientX;
		startDrag = dragOffset;

		velocity = 0;
		lastMoveX = e.clientX;
		lastMoveTime = performance.now();

		e.currentTarget.setPointerCapture(e.pointerId);
	}

	function pointerMove(e) {
		if (!isDragging || e.pointerId !== activePointer) return;

		const now = performance.now();
		const dx = e.clientX - startX;

		dragOffset = startDrag - dx;

		// velocity calculation
		const dt = now - lastMoveTime;
		if (dt > 0) {
			velocity = ((lastMoveX - e.clientX) / dt) * 1000;
			velocity = Math.max(-2000, Math.min(2000, velocity));
			lastMoveX = e.clientX;
			lastMoveTime = now;
		}

		if (Math.abs(dragOffset) <= contentWidth) return;
		baseOffset = (baseOffset - dragOffset) % contentWidth;
		dragOffset %= contentWidth;
	}

	function pointerUp(e) {
		if (e.pointerId !== activePointer) return;

		activePointer = null;

		// commit drag
		baseOffset = (baseOffset + dragOffset + contentWidth) % contentWidth;
		dragOffset = 0;

		// allow inertia to run
		isDragging = false;
		allowInertia = true;

		e.currentTarget.releasePointerCapture(e.pointerId);
	}

	/* ---------- hover ---------- */
	function mouseEnter() {
		if (pauseOnHover && !isDragging && !allowInertia) running = false;
	}

	function mouseLeave() {
		if (pauseOnHover) running = true;
	}

	/* ---------- lifecycle ---------- */
	let ro;
	let mo;
	onMount(() => {
		window.requestAnimationFrame(() => {
			const containerWidth = container.offsetWidth || 1;
			repeatedCount = Math.ceil((containerWidth * 2) / approximateItemWidth);
			recalc();
			start();
		});

		ro = new ResizeObserver(scheduleRecalc);
		mo = new MutationObserver(scheduleRecalc);

		ro.observe(container);
		mo.observe(content, { childList: true, subtree: true });

		container.addEventListener('pointerdown', pointerDown);
		window.addEventListener('pointermove', pointerMove);
		window.addEventListener('pointerup', pointerUp);
		window.addEventListener('pointercancel', pointerUp);
	});

	onDestroy(() => {
		stop();
		ro?.disconnect();
		mo?.disconnect();

		if (container) container.removeEventListener('pointerdown', pointerDown);
		if (typeof window !== 'undefined') {
			window.removeEventListener('pointermove', pointerMove);
			window.removeEventListener('pointerup', pointerUp);
			window.removeEventListener('pointercancel', pointerUp);
		}
	});
</script>

<div class="marquee" class:draggable>
	<div
		class="track"
		role="presentation"
		bind:this={container}
		on:mouseenter={mouseEnter}
		on:mouseleave={mouseLeave}
	>
		<div class="inner" bind:this={content} aria-hidden="false">
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
	}

	.draggable {
		cursor: grab;
	}

	.marquee.draggable .track:active {
		cursor: grabbing;
		user-select: none;
		-webkit-user-select: none;
		-ms-user-select: none;
	}

	.track {
		display: flex;
		align-items: center;
		position: relative;

		/* prevent horizontal browser scrolling while allowing vertical scrolling */
		touch-action: pan-y;

		/* ensure touch area doesn't allow native image dragging */
		-webkit-user-drag: none;
	}

	.inner {
		display: flex;
		white-space: nowrap;
		will-change: transform;
		align-items: stretch;
		transform: translateX(0);
	}

	.inner > * {
		white-space: normal !important;
		display: inline-flex;
		align-items: flex-start;
	}
</style>
