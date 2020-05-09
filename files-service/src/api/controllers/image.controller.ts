import { Request, Response } from "express";
import { existsSync, mkdirSync, writeFile } from "fs";

// Function to save a image in server
export const saveImage = async (req: Request, res: Response) => {
	// Creating folder name to save images in disk
	const dirName = `./static`;

	// Check if folder exists
	if (!existsSync(dirName)) {
		// Create folder
		mkdirSync(dirName);
	}

	// Creating the filename of the image
	// timeStamp + sizeInBits + originalEtension
	const fileName = `${dirName}/${Date.now()}-${req.file.size}-${
		req.file.originalname
	}`;

	// Saving the image (buffer) in disk
	writeFile(fileName, req.file.buffer, (error) => {
		if (error) throw error;
	});

	return res.json({
		success: true,
		url: `http://localhost:9005${fileName.substr(1)}`,
	});
};
