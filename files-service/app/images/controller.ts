import { Request, Response } from 'express';
import { extname } from 'path';
import { existsSync, mkdirSync, writeFile } from 'fs';

import { validateImageInput } from './validation';

// Function to save a image in server
export const saveImage = async (req: Request, res: Response) => {
	// Validate image extension
	const { isValid, errors } = await validateImageInput(req.file.mimetype);

	if (!isValid) {
		return res.status(400).json({ success: false, errors });
	}

	try {
		// Creating folder name to save images in disk
		const dirName = `./data`;

		// Check if folder exists
		if (!existsSync(dirName)) {
			// Create folder
			await mkdirSync(dirName);
		}

		// Creating the filename of the image
		// timeStamp + sizeInBits + originalEtension
		const fileName = `./${dirName}/${Date.now()}-${req.file.size}${extname(
			req.file.originalname
		)}`;

		// Saving the image (buffer) in disk
		writeFile(fileName, req.file.buffer, error => {
			if (error) throw error;
		});

		return res.json({ success: true, fileName });
	} catch (err) {
		console.error(err);

		return res.status(500).json({ success: false, err });
	}
};
