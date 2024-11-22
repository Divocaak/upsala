export async function load({ params, fetch }) {
	const response = await fetch('/dynamic/jsons/data/arch.json');
	const data = await response.json();

	return { colorFooter: true, objects: data.arch };
}
