<script>
	import { onMount } from 'svelte';

	let href;

	onMount(() => {
		href = window.location.href;
	});
</script>

<p class="label">Poptávkový formulář</p>
<form action="https://api.staticforms.xyz/submit" method="post">
	<input type="hidden" name="accessKey" value="c09c4a1e-6fde-4dbc-8e47-b48142f6c8ba" />
	<input type="hidden" name="subject" value="Poptávka projekt ARCH" />
	<input type="hidden" name="redirectTo" value="{href}/success" />
	<div class="form-row">
		<label for="type">
			Typ archu<br />
			<select id="type" name="$type">
				<option value="Archivační">Archivační</option>
				<option value="Prezentační">Prezentační</option>
				<option value="Obaly a Boxy">Obaly a boxy</option>
			</select>
		</label>
		<label for="format">
			Formát <span>*</span><br />
			<input id="format" name="$format" type="text" placeholder="A4" required />
		</label>
		<label for="ammount">
			Přibližný počet kusů <span>*</span><br />
			<input id="ammount" name="$ammount" type="number" placeholder="10" required />
		</label>
	</div>
	<div class="form-row">
		<label for="name">
			Jméno <span>*</span><br />
			<input id="name" name="$name" type="text" required />
		</label>
		<label for="mail">
			Email <span>*</span><br />
			<input id="mail" name="$mail" type="email" required />
		</label>
		<label for="phone">
			Telefon<br />
			<input id="phone" name="$phone" type="tel" />
		</label>
	</div>
	<label for="description">
		Popište váš projekt<br />
		<textarea id="description" name="$description" rows="7"></textarea>
	</label>
	<input type="submit" value="Odeslat" />
</form>

<style>
	.label {
		font-size: var(--text-64);
		font-weight: bold;
		line-height: 1.2em;
		text-align: center;
	}

	label {
		font-family: 'SuisseIntl', sans-serif;
		font-size: var(--text-32);
		word-spacing: 0px;
	}

	label span {
		color: cyan;
	}

	input,
	textarea,
	select {
		font-size: var(--text-36);

		border: 1px solid black;
		border-radius: 40px;

		padding: 25px;
		margin-top: 20px;

		width: calc(100% - 50px);
		box-sizing: border-box;
	}

	form {
		display: grid;
		grid-template-columns: 1fr;
		gap: 40px;

		width: 75%;
		margin: auto;
	}

	.form-row {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 20px;
	}

	textarea {
		grid-column: span 3;
		width: calc(100% - 50px);
		resize: vertical;
	}

	input[type='submit'] {
		width: 100%;

		color: white;
		background-color: black;

		transition: all 0.45s;
	}

	input[type='submit']:hover {
		background-color: var(--pink);
		border-color: var(--pink);
	}

	@media screen and (max-width: 800px) {
		form {
			width: 95%;
		}
		.form-row {
			grid-template-columns: repeat(1, 1fr);
		}
	}
</style>
