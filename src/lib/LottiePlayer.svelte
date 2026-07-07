<!-- NOTE https://github.com/dealfonso/simplelottieplayer -->
<script>
	import { onMount } from 'svelte';

	export let path;
	export let additionalClasses;

	let options = {
		// The URL to load the animation
		url: path,
		// Function called when the animation has just been loaded
		onAnimationLoaded: (animationData, player) => {},
		// Max width when resizing
		maxWidth: null,
		// Max height when resizing
		maxHeight: null,
		// Start playing on load
		autoplay: true,
		// Loop the animation forever
		loop: true,
		/// Number of times the animation should be repeated (0 means infinite, 1 means play once, 2 means play twice, etc.)
		//  (*) if loop is set to false, this parameter is ignored
		repeatCount: 0,
		// Automatically resize the container to the size of the animation, on animation loaded
		autosize: false,
		// Add two overlay divs that act as buttons (play and pause, that work depending on the animation is playing or not)
		controlButtons: false,
		// Add an overlay button that makes the player to display at full size (ignoring the maxWidth and maxHeight parameters)
		fullsizeButton: false,
		// CSS class for buttons
		cssClassControlButtons: null,
		// CSS class for buttons
		cssClassFullsizeButton: null,
		// Function called whenever the play button is clicked
		onPlayBtn: (player) => {},
		// Function called whenever the pause button is clicked
		onPauseBtn: (player) => {},
		// Function called whenever the animation is played
		onPlay: (player) => {},
		// Function called whenever the animation is stopped
		onStop: (player) => {},
		// Function called whenever the animation is paused
		onPause: (player) => {}
	};

	let playerElement;
	let lottiePlayer;
	onMount(() => {
		lottiePlayer = new SimpleLottiePlayer(playerElement, options);
	});
</script>

<div bind:this={playerElement} class={additionalClasses}></div>
