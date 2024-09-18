import fs from 'fs';

export async function saveJson(data, jsonPath) {
    try {
        fs.writeFileSync(jsonPath, JSON.stringify(data, null, 2));
        return {
            status: 200,
            body: { message: "JSON saved successfully" }
        };
    } catch (error) {
        return {
            status: 500, body: {
                title: "Error saving JSON file",
                message: error.message,
                trace: error.stack
            }
        };
    }
}