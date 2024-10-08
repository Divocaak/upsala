export async function load({ params, fetch }) {
	const { sub } = params;

	const response = await fetch('/dynamic/jsons/data/arch.json');
	const data = await response.json();

	const objects = data.arch[sub];

	return { objects: objects, subName: sub };
}
