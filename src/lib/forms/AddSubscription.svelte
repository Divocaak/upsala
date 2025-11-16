<label for="newsletter" class="container"
	>Připoj se k našemu newsletteru
	<input type="checkbox" id="newsletter" name="$newsletter" />
	<span class="checkmark"></span>
</label>

<style>
	.container {
		display: block;
		position: relative;

		padding-left: 35px;
		cursor: pointer;
		/* font-size: 22px; */
		padding-top: 5px;

		margin: 0 auto;
		margin-top: 1rem;

		-webkit-user-select: none;
		-moz-user-select: none;
		-ms-user-select: none;
		user-select: none;
	}

	/* Hide the browser's default checkbox */
	.container input {
		position: absolute;
		opacity: 0;
		cursor: pointer;
		height: 0;
		width: 0;
	}

	/* Create a custom checkbox */
	.checkmark {
		position: absolute;
		top: 0;
		left: 0;
		height: 25px;
		width: 25px;

		border: 1px solid var(--black);

		/* transition: .25s ease-in-out; */
	}

	/* .container:hover input ~ .checkmark {
		background-color: var(--light-grey);
	} */

	.container input:checked ~ .checkmark {
		background-color: var(--black);
	}

	/* Create the checkmark/indicator (hidden when not checked) */
	.checkmark:after {
		content: '';
		position: absolute;
		display: none;
	}

	/* Show the checkmark when checked */
	.container input:checked ~ .checkmark:after {
		display: block;
	}

	/* Style the checkmark/indicator */
	.container .checkmark:after {
		left: 9px;
		top: 5px;
		width: 5px;
		height: 10px;
		border: solid var(--form-bg);
		border-width: 0 3px 3px 0;
		-webkit-transform: rotate(45deg);
		-ms-transform: rotate(45deg);
		transform: rotate(45deg);
	}
</style>
