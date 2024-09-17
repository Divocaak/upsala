<script>
	import { goto } from '$app/navigation';

	let password = '';
	let error = '';

	const handleSubmit = async (event) => {
		event.preventDefault();

		const response = await fetch('/admin/auth', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ password })
		});

		if (response.ok) {
			goto('/admin');
		} else {
			error = 'neznámé heslo';
		}
	};
</script>

<form on:submit={handleSubmit}>
	<label for="password">Heslo:</label>
	<input type="password" bind:value={password} id="password" required />

	{#if error}
		<p style="color: red;">{error}</p>
	{/if}

	<button type="submit">Login</button>
</form>
