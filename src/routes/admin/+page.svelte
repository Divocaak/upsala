<script>
	import AdminForm from '$lib/admin/AdminForm.svelte';
</script>

<AdminForm
	schemaPath="/dynamic/jsons/schemas/filters.json"
	dataPath="/dynamic/jsons/data/filters.json"
	apiPath="/api/save-filters"
	saveButton="filtry"
/>
<AdminForm
	schemaPath="/dynamic/jsons/schemas/reference.json"
	dataPath="/dynamic/jsons/data/reference.json"
	apiPath="/api/save-reference"
	saveButton="reference"
/>
<AdminForm
	schemaPath="/dynamic/jsons/schemas/projects.json"
	dataPath="/dynamic/jsons/data/projects.json"
	apiPath="/api/save-projects"
	saveButton="projekty"
/>
<AdminForm
	schemaPath="/dynamic/jsons/schemas/arch.json"
	dataPath="/dynamic/jsons/data/arch.json"
	apiPath="/api/save-arch"
	saveButton="arch"
/>
