export async function load({ params, fetch }) {
  const { id } = params;

  const response = await fetch('/dynamic/content.json');
  const data = await response.json();

  const object = data.work.projects[id];

  const projectsTotal = data.work.projects.length - 1;
  const referenceIds = getThreeRandomNumbersExcludingX(0, projectsTotal, id);

  return {
    project: object,
    references: [
      data.work.projects[referenceIds[0]],
      data.work.projects[referenceIds[1]],
      data.work.projects[referenceIds[2]]
    ],
    referenceIds: referenceIds
  };
}

function getThreeRandomNumbersExcludingX(min, max, x) {
  const randomNumbers = new Set();
  
  while (randomNumbers.size < 3) {
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    
    if (randomNumber !== parseInt(x)) {
      randomNumbers.add(randomNumber);
    }
  }
  
  return Array.from(randomNumbers);
}