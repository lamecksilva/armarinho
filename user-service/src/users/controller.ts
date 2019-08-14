import { Request, Response } from 'express';

import { validateCreateUserInput } from './validation';
import { saveUser } from './repository';

// Register user
export const registerUser = async (req: Request, res: Response) => {
	const { isValid, errors } = await validateCreateUserInput(req.body);

	if (!isValid) {
		return res
			.status(400)
			.json({ success: false, errors })
			.end();
	}

	const savedUser = await saveUser(req.body);

	return res
		.status(201)
		.json({ success: true, savedUser })
		.end();
};

// Return user
export const getUser = (req: Request, res: Response) => {
	return res
		.status(302)
		.json(req.body)
		.end();
};

// Return all users
export const getUsers = (req: Request, res: Response) => {
	return res
		.status(302)
		.json(req.body)
		.end();
};

// Edit user
export const editUser = (req: Request, res: Response) => {
	return res
		.status(201)
		.json(req.body)
		.end();
};

// Delete user
export const deleteUser = (req: Request, res: Response) => {
	return res
		.status(200)
		.json(req.body)
		.end();
};
