import { saveJson } from '$lib/admin/scripts/saveJson.js';
import { processImage } from '../../../lib/admin/scripts/saveImages.js';

export async function POST({ request }) {
	const data = await request.json();

	for (const reference of data.reference.references) {
		reference.image = await processImage(reference.image, data.reference.imgsPath, "reference image");
	}

	const jsonResponse = saveJson(data, './dynamic/jsons/data/reference.json', "reference");

	/* return new Response(
		JSON.stringify({
			status: 200,
			body: { message: 'File saved successfully' }
		})
	); */

}
