<script>
	import RunningElement from './RunningElement.svelte';
	export let items = [];
	export let speed = 30;
	export let pauseOnHover = true;
</script>

<div class="wrapper">
	<RunningElement {speed} {pauseOnHover} approximateItemWidth={250}>
		{#each items as item}
			<div class="running-box">
				<svg
					width="54"
					height="62"
					viewBox="0 0 54 62"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M37.1055 0.00585938C36.5415 0.0537392 36.0382 0.405298 35.7988 0.916016C35.0483 2.49931 30.72 10.4887 19.1357 12.3428C4.74064 14.6482 0.436993 25.317 0.258789 25.7783L0 26.4434L15.7168 48.6943L25.0703 61.9385L27.2432 60.4033L18.4512 47.9521C19.7148 46.287 22.7003 42.4031 24.0225 41.1104C26.2145 38.9693 29.9625 37.4217 34.8594 36.6396C49.2565 34.3361 53.5608 23.6609 53.7363 23.2061L53.9951 22.541L38.5498 0.678711C38.2227 0.216035 37.6693 -0.0418611 37.1055 0.00585938Z"
						fill="black"
					/>
				</svg>

				<div class="texts-wrapper">
					<p>{item.content}</p>
					<p>{item.label}</p>
				</div>
			</div>
		{/each}
	</RunningElement>
</div>

<style>
	.wrapper {
		width: 100%;
		padding: calc(2 * var(--general-px)) 0;
		overflow: visible;
	}

	.running-box {
		padding: 1rem;
		margin-right: 2rem;

		border: 1px solid var(--black);

		display: flex;
		flex-direction: row;

		gap: 1rem;

		white-space: normal;

		max-width: 300px;
		width: auto;

		flex: 0 0 auto;

		transition: all 0.25s ease-in-out;
	}

	.running-box svg {
		flex: 0 0 auto;
		width: 40px;
		height: auto;
		object-fit: contain;
		display: block;
	}

	.running-box .texts-wrapper {
		display: flex;
		flex-direction: column;

		justify-content: space-between;
	}

	.running-box .texts-wrapper p {
		white-space: normal;
		overflow-wrap: break-word;
	}

	.running-box .texts-wrapper p:first-of-type {
		font-weight: 400;
		font-size: var(--text-24);
		line-height: 130%;
		letter-spacing: 0%;
		margin: 0;
	}

	.running-box .texts-wrapper p:last-of-type {
		font-weight: 300;
		font-size: var(--text-16);
		line-height: 130%;
		letter-spacing: 0%;
		text-transform: uppercase;

		margin-bottom: 0;
	}

	/* .running-box:hover {
		transform: scale(1.1);
		z-index: 1000;
	} */
</style>
