export async function load({ params, fetch }) {
	const { id } = params;

	const response = await fetch(`/dynamic/jsons/data/projects.json?${Date.now()}`);
	const data = await response.json();

	const object = data.projects.find((project) => project.id === parseInt(id));
	const randomObjects = getRandomObjects(data.projects, 3, id);

	return {
		project: object,
		references: randomObjects
	};
}

function getRandomObjects(data, numObjects, selectedId) {
	const keys = Object.keys(data);
	const shuffledKeys = keys.sort(() => 0.5 - Math.random());
	let selectedKeys = shuffledKeys.slice(0, numObjects);

	while (selectedKeys.includes(selectedId)) {
		const index = selectedKeys.indexOf(selectedId);
		selectedKeys[index] = shuffledKeys[numObjects];
	}

	const resultArray = selectedKeys.map((key) => ({ id: key, ...data[key] }));
	return resultArray;
}
