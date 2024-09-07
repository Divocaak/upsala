export async function load({ params, fetch }) {
  const { id } = params;

  const response = await fetch('/dynamic/content.json');
  const data = await response.json();

  const object = data.projects[id];

  const randomObjects = getRandomObjects(data.projects, 3);

  return {
    id: id,
    project: object,
    references: randomObjects
  };
}

function getRandomObjects(data, numObjects) {
  const keys = Object.keys(data);
  const shuffledKeys = keys.sort(() => 0.5 - Math.random());
  const selectedKeys = shuffledKeys.slice(0, numObjects);
  const resultArray = selectedKeys.map(key => ({ id: key, ...data[key] }));
  const shuffledResult = resultArray.sort(() => 0.5 - Math.random());
  return shuffledResult;
}