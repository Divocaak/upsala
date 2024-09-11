<script>
	import { onMount } from 'svelte';
	import { JSONEditor } from '@json-editor/json-editor';
	import { Base64ImageEditor } from '$lib/Base64ImageEditor';

	import schema from '/dynamic/schema';
	
	let editor;
	let editorContainer;
	
	let data;
	onMount(async () => {
		const res = await fetch('/dynamic/content.json');
		data = await res.json();
		let jsonData = data;

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

		JSONEditor.defaults.editors.base64image = Base64ImageEditor;
		JSONEditor.defaults.resolvers.unshift((schema) => {
			if (schema.type === 'string' && schema.media && schema.media.binaryEncoding === 'base64') {
				if (
					schema.media.type === 'img/png' ||
					schema.media.type === 'img/jpeg' ||
					schema.media.type === 'video/mp4' ||
					schema.media.type === 'video/quicktime'
				) {
					return 'base64image';
				}
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
	/* BUG password protected! */
</script>

<svelte:head>
	<link rel="stylesheet" href="https://unpkg.com/spectre.css/dist/spectre.min.css" />
	<link rel="stylesheet" href="https://unpkg.com/spectre.css/dist/spectre-icons.min.css" />
</svelte:head>

<div bind:this={editorContainer} class="editor-container"></div>
<button on:click={saveJSON}>Uložit</button>
