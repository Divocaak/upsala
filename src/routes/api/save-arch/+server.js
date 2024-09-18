import fs from 'fs';
import path from 'path';
import crypto from 'crypto';

/* URGENT arch */
export async function POST({ request }) {
	try {
		const data = await request.json();

		updatePaths(data.projects, data.arch.archival, data.arch.presentational, data.arch.boxes);

		await processImages(data.projects, (project) => project.imgsPath);

		if (data.reference && data.reference.references) {
			await processReferences(data.reference.references, data.reference.imgsPath);
		}

		await processImages(data.arch.archival, (subarch) => subarch.imgsPath);
		await processImages(data.arch.presentational, (subarch) => subarch.imgsPath);
		await processImages(data.arch.boxes, (subarch) => subarch.imgsPath);

		// save json
		const jsonPath = './dynamic/content.json';
		fs.writeFileSync(jsonPath, JSON.stringify(data, null, 2));

		return new Response(
			JSON.stringify({
				status: 200,
				body: { message: 'File saved successfully' }
			})
		);
	} catch (error) {
		return new Response(
			JSON.stringify({
				status: 500,
				body: {
					message: 'Error saving file',
					name: error.name,
					message: error.message,
					trace: error.stack
				}
			})
		);
	}
}

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
			item.images = await processImageArray(item.images, pathGetter, item, 'item images');
		}

		if (item.homepage) {
			item.homepage.image = await processImage(item.homepage?.image, pathGetter, item, 'homepage image');
		}

		item.thumbnail = await processImage(item.thumbnail, pathGetter, item, 'thumbnail');
		item.landingMedia = await processImage(item.landingMedia, pathGetter, item, 'landing media');
		item.icon = await processImage(item.icon, pathGetter, item, 'icon');
	}
};

const processImage = async (image, pathGetter, item, context) => {
	if (checkForBase64(image)) {
		try {
			return await saveImage(image, pathGetter(item));
		} catch (error) {
			console.error(`Error processing ${context}:`, error);
		}
	}
	return image;
};

const processImageArray = async (images, pathGetter, item, context) => {
	return Promise.all(images.map(async (img, index) => {
		if (Array.isArray(img)) {
			return await processImageArray(img, pathGetter, item, `${context} sub-image ${index}`);
		} else {
			return await processImage(img, pathGetter, item, `${context} image ${index}`);
		}
	}));
};

const updatePaths = (projects, archival, presentational, boxes) => {
	const addIdToPath = (items) => {
		items.forEach((item) => {
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
