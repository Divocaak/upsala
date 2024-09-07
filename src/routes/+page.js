export async function load({ params, fetch }) {
  const response = await fetch('/dynamic/content.json');
  const data = await response.json();

  const resultArray = Object.entries(data.projects)
    .filter(([id]) => data.projects[id].homepage)
    .map(([id]) => ({ id, homepage: data.projects[id].homepage }))
    .sort((a, b) => a.homepage.index - b.homepage.index);

  return { resultArray };

}