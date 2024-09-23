<script>
	import { onMount } from 'svelte';
	import { JSONEditor } from '@json-editor/json-editor';
	import { Base64ImageEditor } from '$lib/admin/Base64ImageEditor';

	export let schemaPath, dataPath, apiPath, saveButton;

	let editor;
	let container;

	onMount(async () => {
		JSONEditor.defaults.editors.base64image = Base64ImageEditor;
		JSONEditor.defaults.resolvers.unshift((schema) => {
			if (schema.type === 'string' && schema.media && schema.media.binaryEncoding === 'base64') {
				if (
					schema.media.type === 'img/png' ||
					schema.media.type === 'img/jpeg' ||
					schema.media.type === 'img/svg' ||
					schema.media.type === 'video/mp4' ||
					schema.media.type === 'video/quicktime'
				) {
					return 'base64image';
				}
			}
		});

		const schemaRes = await fetch(schemaPath);
		const schemaData = await schemaRes.json();

		const dataRes = await fetch(dataPath);
		const dataData = await dataRes.json();

		editor = new JSONEditor(container, {
			disable_edit_json: true,
			disable_properties: true,
			disable_array_delete_last_row: true,
			compact: true,
			theme: 'spectre',
			iconlib: 'spectre',
			schema: schemaData,
			startval: dataData
		});

		editor.on('ready', () => {
			editor.on('addRow', (property) => {
				if (property.editors && property.editors.id) property.editors.id.setValue(Date.now());
			});
		});

		return () => {
			if (editor) editor.destroy();
		};
	});

	async function saveJSON() {
		if (editor) {
			try {
				const editedData = editor.getValue();
				const response = await fetch(apiPath, {
					method: 'POST',
					headers: { 'Content-Type': 'application/json' },
					body: JSON.stringify(editedData)
				});

				const responseData = await response.json();
				if (responseData.status === 200) {
					alert('File saved successfully!');
				} else {
					console.error(responseData);
					alert('Failed to save file. Check console for more information');
				}
			} catch (error) {
				console.error('Error:', error);
				alert('Error saving file.');
			}
		}
	}
</script>

<svelte:head>
	<link rel="stylesheet" href="https://unpkg.com/spectre.css/dist/spectre.min.css" />
	<link rel="stylesheet" href="https://unpkg.com/spectre.css/dist/spectre-icons.min.css" />
</svelte:head>

<div class="wrapper">
	<div bind:this={container} class="editor-container"></div>
	<button on:click={saveJSON}>Uložit {saveButton}</button>
</div>

<style>
	.wrapper {
		padding: 25px;
		border: 1px solid black;
	}
</style>
