import { saveJson } from '$lib/admin/scripts/saveJson.js';
import { processImage } from '$lib/admin/scripts/saveImages.js';

export async function POST({ request }) {
	const data = await request.json();

	let errs = [];
	for (const reference of data.reference) {
		reference.image = (await processImage(reference.image, 'reference/', errs)) ?? reference.image;
	}

	// error handling outside of for loop
	// code does not crash under first error but continues with the rest
	const jsonResponse = await saveJson(data, './dynamic/jsons/data/reference.json');
	let toRet = errs.find((e) => e && e.status === 500);
	if (!toRet) toRet = jsonResponse;
	return new Response(JSON.stringify(toRet));
}
