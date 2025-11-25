import { saveJson } from '$lib/admin/scripts/saveJson.js';

export async function POST({ request }) {
	const data = await request.json();

	let errs = [];
	// error handling outside of for loop
	// code does not crash under first error but continues with the rest
	const jsonResponse = await saveJson(data, './dynamic/jsons/data/reference.json');
	let toRet = errs.find((e) => e && e.status === 500);
	if (!toRet) toRet = jsonResponse;
	return new Response(JSON.stringify(toRet));
}
