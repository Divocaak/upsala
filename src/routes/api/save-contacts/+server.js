import { saveJson } from '$lib/admin/scripts/saveJson.js';

export async function POST({ request }) {
	const data = await request.json();

	const jsonResponse = await saveJson(data, './dynamic/jsons/data/contacts.json');
	return new Response(JSON.stringify(jsonResponse));
}
