import { saveJson } from '$lib/admin/scripts/saveJson.js';
import { processImage, processImageArray } from '$lib/admin/scripts/saveImages.js';

export async function POST({ request }) {
	const data = await request.json();

	let errs = [];
	for (const item of data.arch.archival) {
		const path = `arch/archival/${item.id}`;
		item.icon = (await processImage(item.icon, path, errs)) ?? item.icon;
		item.images = (await processImageArray(item.images, path, errs)) ?? item.images;
	}

	for (const item of data.arch.presentational) {
		const path = `arch/presentational/${item.id}`;
		item.icon = (await processImage(item.icon, path, errs)) ?? item.icon;
		item.images = (await processImageArray(item.images, path, errs)) ?? item.images;
	}

	for (const item of data.arch.boxes) {
		const path = `arch/boxes/${item.id}`;
		item.icon = (await processImage(item.icon, path, errs)) ?? item.icon;
		item.images = (await processImageArray(item.images, path, errs)) ?? item.images;
	}

	// error handling outside of for loop
	// code does not crash under first error but continues with the rest
	const jsonResponse = await saveJson(data, './dynamic/jsons/data/arch.json');
	let toRet = errs.find((e) => e && e.status === 500);
	if (!toRet) toRet = jsonResponse;
	return new Response(JSON.stringify(toRet));
}
