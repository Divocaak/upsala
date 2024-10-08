import { saveJson } from '$lib/admin/scripts/saveJson.js';

export async function POST({ request }) {
	const data = await request.json();

	return new Response(
		JSON.stringify(
			await saveJson(
				{
					definitions: {
						filterEnums: {
							type: 'array',
							items: {
								type: 'string',
								enum: data
							}
						}
					}
				},
				'./dynamic/jsons/data/filters.json'
			)
		)
	);
}
