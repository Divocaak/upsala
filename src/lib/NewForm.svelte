<!-- TODO api endpoint -->
<form>
	<input id="name" name="$name" type="text" placeholder="Jméno Příjmení*" required />
	<input id="mail" name="$mail" type="email" placeholder="Email*" required />
	<textarea id="message" name="$message" placeholder="Zpráva*" rows="7" required></textarea>
	<input type="submit" value="Odeslat zprávu" />
	<label for="newsletter" class="container"
		>Připoj se k našemu newsletteru
		<input type="checkbox" id="newsletter" name="$newsletter" />
		<span class="checkmark"></span>
	</label>
</form>

<style>
	form {
		display: flex;
		flex-direction: column;
	}

	input,
	textarea {
		position: relative;
		/* width: 100%; */
		border-radius: 0;
		border: 1px solid var(--black);
		margin: 0;
		padding: 20px;
	}

	label,
	input,
	textarea {
		font-family: 'SuisseIntl';
		font-weight: 400;
		font-size: var(--text-20);
		line-height: 130%;
		letter-spacing: 0%;
	}

	input:nth-of-type(2) {
		border-top: 0px;
		border-bottom: 0px;
	}

	input:focus,
	textarea:focus {
		outline: none;
	}

	input[type='submit'] {
		background-color: var(--black);
		color: var(--form-bg);
        transition: .25s ease-in-out;
	}

    input[type='submit']:hover {
		background-color: var(--pink);
        border: 1px solid var(--pink);
	}

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
