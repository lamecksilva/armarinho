import { Request, Response } from 'express';
import { extname } from 'path';
import { existsSync, mkdirSync, writeFile } from 'fs';

// import { mkdirSync, existsSync, readdir, promises } from 'fs';

export const saveImage = (req: Request, res: Response) => {
	// mkdirSync("/src/images")
	try {
		const dirName = `${__dirname}/data`;

		if (!existsSync(dirName)) {
			mkdirSync(dirName, 777);
		}

		const fileName = `${dirName}/${Date.now()}-${req.file.size}${extname(
			req.file.originalname
		)}`;

		writeFile(fileName, req.file.buffer, error => {
			if (error) throw error;
		});

		res.json({ success: true, fileName });
	} catch (err) {
		console.error(err);

		res.status(500).json({ success: false, err });

		throw new Error(err);
	}
};
