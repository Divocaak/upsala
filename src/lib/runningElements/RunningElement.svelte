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
		const oneCopyWidth = Math.max(1, content.scrollWidth / Math.max(1, repeatedCount));
		// ensure we fill at least twice the container so loop is smooth
		repeatedCount = Math.max(1, Math.ceil((containerWidth * 2) / oneCopyWidth));
	}

	function calculateContentWidth() {
		if (!content) return;
		// content.scrollWidth is the total width of repeatedCount copies
		contentWidth = content.scrollWidth / Math.max(1, repeatedCount);
		if (!isFinite(contentWidth) || contentWidth <= 0) contentWidth = 1;
		container?.style.setProperty('--marquee-distance', `${contentWidth}px`);
	}

	/* --- JS animation loop --- */
	let rafId = null;
	let lastTs = null;
	let baseOffset = 0; // how far we've advanced along the marquee (pixels)
	let dragOffset = 0; // offset applied during dragging
	let isDragging = false;

	function animate(ts) {
		if (lastTs == null) lastTs = ts;
		const dt = (ts - lastTs) / 1000;
		lastTs = ts;

		if (!isDragging && running) {
			baseOffset += speed * dt;
			if (baseOffset > contentWidth) baseOffset = baseOffset % contentWidth;
		}

		// final offset (positive means moved to the right, we want leftward translation)
		let offset = (baseOffset + dragOffset) % contentWidth;
		if (offset < 0) offset += contentWidth;

		const translateX = -offset;
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

	/* --- Dragging --- */
	let pointerId = null;
	let startX = 0;
	let startDragOffset = 0;

	// unified helpers to read a clientX from pointer or touch events
	function clientXFromEvent(e) {
		// pointer event
		if ('clientX' in e && typeof e.clientX === 'number') return e.clientX;
		// touch event with touches or changedTouches
		if (e.touches && e.touches.length) return e.touches[0].clientX;
		if (e.changedTouches && e.changedTouches.length) return e.changedTouches[0].clientX;
		return 0;
	}

	// pointer handlers (preferred)
	function onPointerDown(e) {
		if (!draggable) return;
		// only left mouse or touch
		if (e.pointerType === 'mouse' && e.button !== 0) return;

		isDragging = true;
		pointerId = e.pointerId ?? null;
		startX = clientXFromEvent(e);
		startDragOffset = dragOffset;

		// try capture if available
		try {
			e.currentTarget.setPointerCapture?.(pointerId);
		} catch (err) {}

		// prevent native behavior that may cancel moves
		e.preventDefault();
	}

	function onPointerMove(e) {
		// if pointer events are used: require matching pointerId when available
		if (!isDragging) return;
		if (pointerId != null && 'pointerId' in e && e.pointerId !== pointerId) return;

		const cx = clientXFromEvent(e);
		const dx = cx - startX;
		dragOffset = startDragOffset - dx;

		// fold large dragOffset into baseOffset
		if (Math.abs(dragOffset) > contentWidth) {
			baseOffset = (baseOffset - dragOffset) % contentWidth;
			dragOffset = dragOffset % contentWidth;
		}
	}

	function onPointerUp(e) {
		if (!isDragging) return;
		if (pointerId != null && 'pointerId' in e && e.pointerId !== pointerId) return;

		isDragging = false;
		try {
			e.currentTarget.releasePointerCapture?.(pointerId);
		} catch (err) {}

		baseOffset = (baseOffset + dragOffset) % contentWidth;
		if (baseOffset < 0) baseOffset += contentWidth;
		dragOffset = 0;
		pointerId = null;
	}

	/* --- Touch-only fallbacks (covers older Android webviews) --- */
	function onTouchStart(e) {
		if (!draggable) return;
		isDragging = true;
		pointerId = null; // touch fallback
		startX = clientXFromEvent(e);
		startDragOffset = dragOffset;

		// prevent page scroll while horizontally dragging
		e.preventDefault();
	}

	function onTouchMove(e) {
		if (!isDragging) return;
		const cx = clientXFromEvent(e);
		const dx = cx - startX;
		dragOffset = startDragOffset - dx;

		if (Math.abs(dragOffset) > contentWidth) {
			baseOffset = (baseOffset - dragOffset) % contentWidth;
			dragOffset = dragOffset % contentWidth;
		}
		// prevent native scroll so drag is uninterrupted
		e.preventDefault();
	}

	function onTouchEnd(e) {
		if (!isDragging) return;
		isDragging = false;
		baseOffset = (baseOffset + dragOffset) % contentWidth;
		if (baseOffset < 0) baseOffset += contentWidth;
		dragOffset = 0;
		pointerId = null;
	}

	/* --- pause on hover --- */
	function onMouseEnter() {
		if (pauseOnHover) running = false;
	}
	function onMouseLeave() {
		if (pauseOnHover) running = true;
	}

	/* --- lifecycle: mount / resize --- */
	let ro;
	let mo;
	onMount(() => {
		// initial repeat calc AFTER DOM paints
		requestAnimationFrame(() => {
			if (container && content) {
				const containerWidth = container.offsetWidth || 1;
				const roughItemWidth = approximateItemWidth || 250;
				const itemsNeeded = Math.ceil((containerWidth * 2) / roughItemWidth);
				repeatedCount = Math.max(1, itemsNeeded);
			}
			calculateRepeatedCount();
			calculateContentWidth();
			startLoop();
		});

		// Resize observer
		ro = new ResizeObserver(() => {
			calculateRepeatedCount();
			requestAnimationFrame(() => calculateContentWidth());
		});
		if (container) ro.observe(container);

		// MutationObserver for content changes (images, fonts)
		mo = new MutationObserver(() => {
			calculateRepeatedCount();
			requestAnimationFrame(() => calculateContentWidth());
		});
		if (content) mo.observe(content, { childList: true, subtree: true });

		// pointer events attached via markup will work in many cases, but some Android environments
		// need explicit touch listeners with passive:false so we can preventDefault and stop scrolling.
		// Add touch listeners on the container (passive:false) and mirror them on window for move/end.
		if (container) {
			try {
				container.addEventListener('touchstart', onTouchStart, { passive: false });
				container.addEventListener('touchmove', onTouchMove, { passive: false });
			} catch (err) {
				// older browsers may throw on options object - fall back:
				container.addEventListener('touchstart', onTouchStart);
				container.addEventListener('touchmove', onTouchMove);
			}

			// window-level touchend to ensure we catch finger up even outside the element
			try {
				window.addEventListener('touchend', onTouchEnd, { passive: false });
				window.addEventListener('touchcancel', onTouchEnd, { passive: false });
			} catch (err) {
				window.addEventListener('touchend', onTouchEnd);
				window.addEventListener('touchcancel', onTouchEnd);
			}
		}

		// also add pointer listeners to container (Svelte markup has handlers too but explicit listeners are more reliable cross-webview)
		if (container) {
			container.addEventListener('pointerdown', onPointerDown);
			// move/up attached to window to ensure we get them even if pointer leaves element
			window.addEventListener('pointermove', onPointerMove);
			window.addEventListener('pointerup', onPointerUp);
			window.addEventListener('pointercancel', onPointerUp);
		}

		return () => {
			stopLoop();
			ro?.disconnect();
			mo?.disconnect();

			if (container) {
				try {
					container.removeEventListener('touchstart', onTouchStart, { passive: false });
					container.removeEventListener('touchmove', onTouchMove, { passive: false });
				} catch (err) {
					container.removeEventListener('touchstart', onTouchStart);
					container.removeEventListener('touchmove', onTouchMove);
				}

				try {
					window.removeEventListener('touchend', onTouchEnd, { passive: false });
					window.removeEventListener('touchcancel', onTouchEnd, { passive: false });
				} catch (err) {
					window.removeEventListener('touchend', onTouchEnd);
					window.removeEventListener('touchcancel', onTouchEnd);
				}

				container.removeEventListener('pointerdown', onPointerDown);
				window.removeEventListener('pointermove', onPointerMove);
				window.removeEventListener('pointerup', onPointerUp);
				window.removeEventListener('pointercancel', onPointerUp);
			}
		};
	});

	onDestroy(() => {
		stopLoop();
		ro?.disconnect();
		mo?.disconnect();
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
