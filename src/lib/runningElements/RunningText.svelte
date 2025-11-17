<script>
	import RunningElement from './RunningElement.svelte';
	export let text = 'Your scrolling text here';
	export let speed = 50;
	export let pauseOnHover = false;
</script>

<RunningElement {speed} {pauseOnHover} approximateItemWidth={800}>
	<p class="running-text">{text}</p>
</RunningElement>

<style>
	.running-text {
		flex-shrink: 0;
		display: inline-block;
		white-space: nowrap;
		font-weight: 400;
		font-size: 128px;
		word-spacing: 2rem;
	}
</style>
