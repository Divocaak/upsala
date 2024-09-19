import { saveJson } from '$lib/admin/scripts/saveJson.js';
import { processImage, processImageArray } from '$lib/admin/scripts/saveImages.js';

export async function POST({ request }) {
	const data = await request.json();

	let errs = [];
	for (const item of data.projects) {
		const path = `work/${item.id}`;
		if (item.homepage) {
			item.homepage.image = await processImage(item.homepage.image, path, errs) ?? item.homepage.image;
		}

		item.thumbnail = await processImage(item.thumbnail, path, errs) ?? item.thumbnail;
		item.landingMedia = await processImage(item.landingMedia, path, errs) ?? item.landingMedia;

		if (item.images) {
			item.images = await processImageArray(item.images, path, errs) ?? item.images;
		}
	}

	// error handling outside of for loop
	// code does not crash under first error but continues with the rest
	const jsonResponse = await saveJson(data, './dynamic/jsons/data/projects.json');
	let toRet = errs.find(e => e && e.status === 500);
	if (!toRet) toRet = jsonResponse;
	return new Response(JSON.stringify(toRet));
}