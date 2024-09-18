import fs from 'fs';

export async function saveJson({ data, jsonPath, context }) {
    try {
        fs.writeFileSync(jsonPath, JSON.stringify(data, null, 2));

        JSON.stringify({
            status: 200,
            body: { message: `${context} JSON saved successfully` }
        });
    } catch (error) {
        JSON.stringify({
            status: 500,
            body: {
                message: `Error saving ${context} JSON file`,
                message: error.message,
                trace: error.stack
            }
        });
    }
}