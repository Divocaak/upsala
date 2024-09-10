<script>
	import { onMount } from 'svelte';
	import { JSONEditor } from '@json-editor/json-editor';

	import schema from '/dynamic/schema';
	import data from '/dynamic/content';

	let editor;
	let editorContainer;
	let jsonData = data;

	onMount(() => {
		editor = new JSONEditor(editorContainer, {
			disable_edit_json: true,
			disable_properties: true,
			disable_array_delete_last_row: true,
			compact: true,
			theme: 'spectre',
			iconlib: 'spectre',
			form_name_root: ' ',
			schema: schema,
			startval: jsonData
		});

		JSONEditor.defaults.resolvers.unshift((schema) => {
			if (schema.type === 'data-url') {
				console.log('asdasd');
				return 'location';
			}
		});

		return () => {
			if (editor) {
				editor.destroy();
			}
		};
	});

	async function saveJSON() {
		if (editor) {
			try {
				const editedData = editor.getValue();
				const response = await fetch('/api/save-json', {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json'
					},
					body: JSON.stringify(editedData)
				});

				if (response.ok) {
					alert('File saved successfully!');
				} else {
					alert('Failed to save file.');
				}
			} catch (error) {
				console.error('Error:', error);
				alert('Error saving file.');
			}
		}
	}

	/* BUG validate IDs! */
</script>

<svelte:head>
	<link rel="stylesheet" href="https://unpkg.com/spectre.css/dist/spectre.min.css" />
	<link rel="stylesheet" href="https://unpkg.com/spectre.css/dist/spectre-icons.min.css" />
</svelte:head>

<div bind:this={editorContainer} class="editor-container"></div>
<button on:click={saveJSON}>Get JSON Data</button>
