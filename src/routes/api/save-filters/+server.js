import { saveJson } from '$lib/admin/scripts/saveJson.js';

export async function POST({ request }) {
	const data = await request.json();

	return new Response(saveJson(data, './dynamic/jsons/data/filters.json', "filters"));
}