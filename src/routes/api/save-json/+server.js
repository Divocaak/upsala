import fs from 'fs';
import path from 'path';
import crypto from 'crypto';

export async function POST({ request }) {
    try {
        const data = await request.json();

        updatePaths(data.projects, data.arch.archival, data.arch.presentational, data.arch.boxes);

        await processImages(data.projects, project => project.imgsPath);

        if (data.reference && data.reference.references) {
            await processReferences(data.reference.references, data.reference.imgsPath);
        }

        await processImages(data.arch.archival, subarch => subarch.imgsPath);
        await processImages(data.arch.presentational, subarch => subarch.imgsPath);
        await processImages(data.arch.boxes, subarch => subarch.imgsPath);

        // save json
        const jsonPath = './dynamic/content.json';
        fs.writeFileSync(jsonPath, JSON.stringify(data, null, 2));

        return new Response(JSON.stringify({
            status: 200,
            body: { message: 'File saved successfully' }
        }));
    } catch (error) {
        console.error('Error saving file:', error.stack);
        return new Response(JSON.stringify({
            status: 500,
            body: { message: 'Error saving file' }
        }));
    }
};

const processReferences = async (references, imgsPath) => {
    for (const reference of references) {
        if (checkForBase64(reference.image)) {
            reference.image = await saveImage(reference.image, imgsPath);
        }
    }
};

const processImages = async (items, pathGetter) => {
    for (const item of items) {
        if (item.images) {
            for (let i = 0; i < item.images.length; i++) {
                const image = item.images[i];
                if (Array.isArray(image)) {
                    for (let j = 0; j < image.length; j++) {
                        const img = image[j];
                        if (checkForBase64(img)) {
                            image[j] = await saveImage(img, pathGetter(item));
                        }
                    }
                } else if (checkForBase64(image)) {
                    item.images[i] = await saveImage(image, pathGetter(item));
                }
            }
        }

        if (item.homepage && checkForBase64(item.homepage.image)) {
            item.homepage.image = await saveImage(item.homepage.image, pathGetter(item));
        }

        if (checkForBase64(item.thumbnail)) {
            item.thumbnail = await saveImage(item.thumbnail, pathGetter(item));
        }

        if (checkForBase64(item.landingMedia)) {
            item.landingMedia = await saveImage(item.landingMedia, pathGetter(item));
        }

        if (item.icon && checkForBase64(item.icon)) {
            item.icon = await saveImage(item.icon, pathGetter(item));
        }
    }
};

const updatePaths = (projects, archival, presentational, boxes) => {
    const addIdToPath = (items) => {
        items.forEach(item => {
            if (!item.imgsPath.endsWith(item.id)) {
                item.imgsPath = path.join(item.imgsPath, item.id.toString());
            }
        });
    };

    addIdToPath(projects);
    addIdToPath(archival);
    addIdToPath(presentational);
    addIdToPath(boxes);
};

const checkForBase64 = (image) => {
    if (!image) return false;
    return image.match(/^data:(.*?);base64,(.*)$/);
};

const saveImage = async (base64Data, directory) => {
    const matches = checkForBase64(base64Data);
    if (!matches) {
        throw new Error('Invalid base64 string');
    }

    const extension = matches[1].split('/')[1];
    const base64String = matches[2];
    const buffer = Buffer.from(base64String, 'base64');

    const filename = crypto.randomBytes(16).toString('hex') + `.${extension}`;
    const dir = path.join('./dynamic/imgs/', directory);

    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
    }
    const filePath = path.join(dir, filename);
    fs.writeFileSync(filePath, buffer);

    return `/${filePath}`;
};