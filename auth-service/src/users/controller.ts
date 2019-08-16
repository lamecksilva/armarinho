import { Request, Response } from 'express';

import { validateCreateUserInput, validateFindUserInput } from './validation';
import { saveUser } from './repository';

/**
 * registerUser
 *
 * Function to save user in database
 *
 * @param req 		Request object
 * @param res 		Response object
 */
export const registerUser = async (req: Request, res: Response) => {
	// Validating user input
	let { isValid, errors } = await validateCreateUserInput(req.body);

	if (!isValid) {
		return res
			.status(400)
			.json({ success: false, errors })
			.end();
	}

	// Save user and get any errors
	const { savedUser, error } = await saveUser(req.body);

	if (error) {
		return res
			.status(400)
			.json({ success: false, errors: { ...error } })
			.end();
	}

	return res
		.status(201)
		.json({ success: true, savedUser })
		.end();
};

/**
 * getUser
 *
 * Function to find one user in database
 *
 * @param req			Request object
 * @param res			Response object
 */
export const getUser = (req: Request, res: Response) => {
	const dataType = validateFindUserInput(req.params.query);

	
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
