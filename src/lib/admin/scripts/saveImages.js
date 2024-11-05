import fs from 'fs';
import path from 'path';
import crypto from 'crypto';

export async function processImage(image, path, errs, filename = null) {
	if (!image) return;

	try {
		if (checkForBase64(image)) {
			const response = await saveImage(image, path, filename);

			if (typeof response === 'object' && response.status === 500) {
				errs.push(response);
				return image;
			}

			return response;
		}
	} catch (error) {
		errs.push({
			status: 500,
			body: {
				title: 'Error processing image',
				message: error.message,
				trace: error.stack
			}
		});
		return image;
	}
}

export async function processImageArray(images, path, errs) {
	return await Promise.all(
		images.map(async (img) => {
			if (Array.isArray(img)) {
				return (await processImageArray(img, path, errs)) ?? img;
			} else {
				return (await processImage(img, path, errs)) ?? img;
			}
		})
	);
}

const checkForBase64 = (image) => image.match(/^data:(.*?);base64,(.*)$/);

async function saveImage(base64Data, directory, desiredFilename = null) {
	try {
		const matches = checkForBase64(base64Data);
		if (!matches) {
			throw new Error('Invalid base64 string');
		}

		const extension = matches[1].split('/')[1];
		const base64String = matches[2];
		const buffer = Buffer.from(base64String, 'base64');

		const filename = (desiredFilename ?? crypto.randomBytes(16).toString('hex')) + `.${extension}`;
		const dir = path.join('./dynamic/imgs/', directory);

		if (!fs.existsSync(dir)) {
			fs.mkdirSync(dir, { recursive: true });
		}
		const filePath = path.join(dir, filename);
		fs.writeFileSync(filePath, buffer);

		return `/${filePath}`;
	} catch (error) {
		return {
			status: 500,
			error: error.message || 'Error saving image',
			trace: error.stack
		};
	}
}
