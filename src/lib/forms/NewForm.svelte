<script>
	const handleSubmit = async (event) => {
		event.preventDefault();

		const form = event.target;
		const formData = new FormData(form);
		const data = Object.fromEntries(formData.entries());

		const res = await fetch('/api/send', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(data)
		});

		const result = await res.json();
		console.log(result);
	};
</script>

<!-- TODO recaptcha -->
<form on:submit={handleSubmit}>
	<slot></slot>
</form>

<style>
	form {
		display: flex;
		flex-direction: column;
	}

	:global(input, textarea) {
		position: relative;
		/* width: 100%; */
		border-radius: 0;
		border: 1px solid var(--black);
		margin: 0;
		padding: 20px;
	}

	:global(label, input, textarea) {
		font-family: 'SuisseIntl';
		font-weight: 400;
		font-size: var(--text-20);
		line-height: 130%;
		letter-spacing: 0%;
	}

	:global(input:nth-of-type(2)) {
		border-top: 0px;
		border-bottom: 0px;
	}

	:global(input:focus, textarea:focus) {
		outline: none;
	}

	:global(input[type='submit']) {
		background-color: var(--black);
		color: var(--form-bg);
		transition: 0.25s ease-in-out;
	}

	:global(input[type='submit']:hover) {
		background-color: var(--pink);
		border: 1px solid var(--pink);
	}
</style>
