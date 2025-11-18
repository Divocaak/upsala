export async function load({ fetch }) {

    const textResponse = await fetch('/dynamic/jsons/data/studio.json');
    const textData = await textResponse.json();

    const res = await fetch('/dynamic/jsons/data/reference.json');
    const referenceData = await res.json();
    const sorted = referenceData.sort((a, b) =>
        a.label.localeCompare(b.label, 'cs', { sensitivity: 'base' })
    );
    const columns = 4;
    const perCol = Math.ceil(sorted.length / columns);
    const splitReference = Array.from({ length: columns }, (_, i) =>
        sorted.slice(i * perCol, i * perCol + perCol)
    );

    return { textData, splitReference };
}
