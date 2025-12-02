<script>
	import { onMount, onDestroy } from 'svelte';

	export let speed = 50; // pixels / second base speed
	export let pauseOnHover = false;
	export let approximateItemWidth = 250;
	export let draggable = false;

	let container; // .track
	let content; // .inner

	let repeatedCount = 1;
	let contentWidth = 1; // width of one set (non-repeated)
	let running = true;

	/* --- Repeating + sizing --- */
	function calculateRepeatedCount() {
		if (!content || !container) return;
		const containerWidth = container.offsetWidth || 1;
		// width of one copy (the inner contains repeatedCount copies, so / repeatedCount)
		const oneCopyWidth = content.scrollWidth / Math.max(1, repeatedCount);
		// ensure we fill at least twice the container so loop is smooth
		repeatedCount = Math.max(1, Math.ceil((containerWidth * 2) / Math.max(1, oneCopyWidth)));
	}

	function calculateContentWidth() {
		if (!content) return;
		// content.scrollWidth is the total width of repeatedCount copies
		contentWidth = content.scrollWidth / Math.max(1, repeatedCount);
		// safety
		if (!isFinite(contentWidth) || contentWidth <= 0) contentWidth = 1;
		container?.style.setProperty('--marquee-distance', `${contentWidth}px`);
	}

	/* --- JS animation loop (we control position explicitly) --- */
	let rafId = null;
	let lastTs = null;
	let baseOffset = 0; // how far we've advanced along the marquee (pixels)
	let dragOffset = 0; // offset applied during dragging
	let isDragging = false;

	function animate(ts) {
		if (lastTs == null) lastTs = ts;
		const dt = (ts - lastTs) / 1000; // seconds
		lastTs = ts;

		if (!isDragging && running) {
			// advance baseOffset by speed * dt
			baseOffset += speed * dt;
			// ensure baseOffset stays bounded
			if (baseOffset > contentWidth) baseOffset = baseOffset % contentWidth;
		}

		// final offset is baseOffset + dragOffset
		let offset = (baseOffset + dragOffset) % contentWidth;
		// we want to move left as baseOffset grows, so subtract
		const translateX = -offset;

		// apply transform to content
		if (content) content.style.transform = `translateX(${translateX}px)`;

		rafId = requestAnimationFrame(animate);
	}

	function startLoop() {
		if (rafId) return;
		lastTs = null;
		rafId = requestAnimationFrame(animate);
	}

	function stopLoop() {
		if (!rafId) return;
		cancelAnimationFrame(rafId);
		rafId = null;
		lastTs = null;
	}

	/* --- Dragging handlers on the whole track --- */
	let pointerId = null;
	let startX = 0;
	let startDragOffset = 0;

	function onPointerDown(e) {
		if (!draggable) return;
		// only left button
		if (e.pointerType === 'mouse' && e.button !== 0) return;

		isDragging = true;
		pointerId = e.pointerId;
		startX = e.clientX;
		startDragOffset = dragOffset;

		// capture the pointer to keep receiving moves outside element
		e.currentTarget.setPointerCapture(pointerId);

		// stop selection / scrolling
		e.preventDefault();

		// pause automatic movement while dragging
		// (we keep the loop running so apply transform consistently)
		// but ensure we don't advance baseOffset while dragging (handled in animate)
	}

	function onPointerMove(e) {
		if (!isDragging || e.pointerId !== pointerId) return;
		const dx = e.clientX - startX;
		dragOffset = startDragOffset - dx;
		// keep dragOffset bounded so numbers don't blow up (mod contentWidth)
		if (Math.abs(dragOffset) > contentWidth) {
			// fold into baseOffset so dragOffset keeps small magnitude
			baseOffset = (baseOffset - dragOffset) % contentWidth;
			dragOffset = dragOffset % contentWidth;
		}
	}

	function onPointerUp(e) {
		if (!isDragging || e.pointerId !== pointerId) return;
		isDragging = false;

		// release pointer capture
		try {
			e.currentTarget.releasePointerCapture(pointerId);
		} catch (err) {}

		// merge dragOffset into baseOffset so movement continues smoothly
		baseOffset = (baseOffset + dragOffset) % contentWidth;
		dragOffset = 0;
		pointerId = null;
	}

	/* --- pause on hover support (optional) --- */
	function onMouseEnter() {
		if (pauseOnHover) running = false;
	}
	function onMouseLeave() {
		if (pauseOnHover) running = true;
	}

	/* --- lifecycle: mount / resize --- */
	let ro;
	onMount(() => {
		// initial repeat calc AFTER DOM paints
		requestAnimationFrame(() => {
			// first naive repeatedCount based on approximate item width
			if (container && content) {
				const containerWidth = container.offsetWidth || 1;
				const roughItemWidth = approximateItemWidth || 250;
				// baseline: at least enough items to fill container twice
				const itemsNeeded = Math.ceil((containerWidth * 2) / roughItemWidth);
				repeatedCount = Math.max(1, itemsNeeded);
			}
			// now recalc more accurately (content must be laid out)
			calculateRepeatedCount();
			calculateContentWidth();
			// start animation
			startLoop();
		});

		// watch for resizes
		ro = new ResizeObserver(() => {
			// recalc repeatedCount and contentWidth after a paint
			calculateRepeatedCount();
			// let Svelte re-render duplicates synchronously, then update width
			requestAnimationFrame(() => {
				calculateContentWidth();
			});
		});
		if (container) ro.observe(container);

		// watch for content changes (images, fonts)
		const mo = new MutationObserver(() => {
			// recalc when children change
			calculateRepeatedCount();
			requestAnimationFrame(() => calculateContentWidth());
		});
		if (content) mo.observe(content, { childList: true, subtree: true });

		return () => {
			stopLoop();
			ro?.disconnect();
			mo?.disconnect();
		};
	});

	onDestroy(() => {
		stopLoop();
		ro?.disconnect();
	});
</script>

<div class="marquee" class:draggable>
	<div
		class="track"
		role="presentation"
		bind:this={container}
		on:pointerdown={onPointerDown}
		on:pointermove={onPointerMove}
		on:pointerup={onPointerUp}
		on:mouseenter={onMouseEnter}
		on:mouseleave={onMouseLeave}
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
		user-select: none; /* prevent selection while dragging */
	}

	.track {
		display: flex;
		align-items: center;
		position: relative;
		/* --marquee-distance is updated from JS when we know sizes */
	}

	.inner {
		display: flex;
		white-space: nowrap;
		will-change: transform;
		align-items: stretch; /* important: equal heights for children */
		/* transform is fully controlled by JS */
	}

	/* style slotted children inside .inner */
	.inner > * {
		white-space: normal !important;
		display: inline-flex;
		align-items: flex-start;
	}
</style>
