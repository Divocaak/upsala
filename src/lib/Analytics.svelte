<script>
	/* eslint-disable */
	import { page } from '$app/stores';
	import { analyticsStore } from '$lib/stores/analyticsStore.js';
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';

	const GA_MEASUREMENT_ID = 'G-F7GJ1HJDWS';

	function loadGA() {
		if (!browser) return;
		if (document.getElementById('ga-script')) return; // prevent duplicate load

		// Inject gtag script
		const s = document.createElement('script');
		s.id = 'ga-script';
		s.async = true;
		s.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
		document.head.appendChild(s);

		// Init GA
		window.dataLayer = window.dataLayer || [];
		function gtag() {
			// @ts-ignore
			window.dataLayer.push(arguments);
		}
		// @ts-ignore
		window.gtag = gtag;

		gtag('js', new Date());
		gtag('config', GA_MEASUREMENT_ID);
		console.log('Google Analytics setup successful');
	}

	onMount(() => {
		if (!browser) return;

		// Initial check
		const consent = localStorage.getItem('ga-consent');
		if (consent === 'accepted') {
			loadGA();
		}

		// Listen for consent changes
		const handler = () => {
			if (localStorage.getItem('ga-consent') === 'accepted') {
				loadGA();
			}
		};
		window.addEventListener('ga-consent-changed', handler);

		return () => {
			window.removeEventListener('ga-consent-changed', handler);
		};
	});

	// reactive: track page views
	$: {
		if (typeof gtag !== 'undefined') {
			// @ts-ignore
			gtag('config', GA_MEASUREMENT_ID, {
				page_title: document.title,
				page_path: $page.url.pathname
			});
		}
	}

	// subscribe to analyticsStore queue
	analyticsStore.subscribe((queue) => {
		let next = queue && queue.length && queue.shift();
		let retries = 3;
		let previousExecutedOperationId;
		while (next) {
			const { type, event, data, id } = next;
			if (!type || !event || !data || !id) {
				console.log('Incorrect analytics event data');
				next = queue.shift();
				continue;
			}
			if (id && id !== previousExecutedOperationId) retries = 3;
			previousExecutedOperationId = id;

			if (typeof gtag !== 'undefined') {
				// @ts-ignore
				gtag(type, event, data);
				console.log('event created with data', next);
			} else {
				if (retries > 0) {
					retries--;
					continue;
				} else {
					console.log('Analytics event failed to reach server with: ', next);
				}
			}
			next = queue.shift();
		}
	});
</script>
