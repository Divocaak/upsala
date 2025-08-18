export async function load({ params, fetch }) {
	const { id } = params;

	const response = await fetch(`/dynamic/jsons/data/projects.json?${Date.now()}`);
	const data = await response.json();

	const object = data.projects.find((project) => project.id === id);
	const randomObjects = getRandomObjects(data.projects, 3, data.projects.indexOf(object));

	return {
		project: object,
		references: randomObjects
	};
}

function getRandomObjects(data, numObjects, selectedIndex) {
	return data
		.filter((_, i) => i !== selectedIndex && _.visible !== false)
		.sort(() => 0.5 - Math.random())
		.slice(0, numObjects);
}
