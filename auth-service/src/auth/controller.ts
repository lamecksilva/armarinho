import { Request, Response } from 'express';

export const loginUser = (req: Request, res: Response) => {
	return res
		.status(200)
		.json(req.body)
		.end();
};
