import { Request, Response } from 'express';

import {
	validateCreateUserInput,
	validateFindUserInput,
	validateEditUserInput
} from './validation';
import { saveUser, queryUser, findUsers, updateUser } from './repository';
import isEmpty from '../utils/is-empty';

//==================================================================================================
/**
 * registerUser
 *
 * Function to save user in database
 *
 * @param req 		Request object
 * @param res 		Response object
 */
export const registerUser = async (req: Request, res: Response) => {
	let { isValid, errors } = await validateCreateUserInput(req.body);

	if (!isValid) {
		return res
			.status(400)
			.json({ success: false, errors })
			.end();
	}

	const { savedUser, error } = await saveUser(req.body);

	if (!isEmpty(error)) {
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

//==================================================================================================
/**
 * getUser
 *
 * Function to find one user in database
 *
 * @param req			Request object
 * @param res			Response object
 */
export const getUser = async (req: Request, res: Response) => {
	const { query } = req.params;

	const queryType = await validateFindUserInput(query);

	const { user, error } = await queryUser(query, queryType);

	if (!isEmpty(error)) {
		return res
			.status(400)
			.json({ success: false, errors: error })
			.end();
	}

	return res
		.status(302)
		.json(user)
		.end();
};

//==================================================================================================
/**
 * getUsers
 *
 * Return all users from database
 *
 * @param req
 * @param res
 */
export const getUsers = async (_: Request, res: Response) => {
	const users = await findUsers();

	return res
		.status(302)
		.json(users)
		.end();
};

//==================================================================================================
/**
 * editUser
 *
 * Edit a user from id
 *
 * @param req
 * @param res
 */
export const editUser = async (req: Request, res: Response) => {
	const { isValid, errors } = await validateEditUserInput(req.body);

	if (!isValid) {
		return res
			.status(400)
			.json({ success: false, errors })
			.end();
	}

	const { user, error } = await updateUser(req.body, req.params.id);

	if (!isEmpty(error)) {
		return res
			.status(400)
			.json({ success: false, errors: error })
			.end();
	}

	return res
		.status(201)
		.json({ success: true, user })
		.end();
};

//==================================================================================================
/**
 * deleteUser
 *
 * Delete a user from id
 *
 * @param req
 * @param res
 */
export const deleteUser = (req: Request, res: Response) => {
	return res
		.status(200)
		.json(req.body)
		.end();
};

//==================================================================================================
/**
 * loginUser
 *
 * Verify credentials and return user data in jwt token
 *
 * @param req
 * @param res
 */
export const loginUser = (req: Request, res: Response) => {
	return res
		.status(200)
		.json(req.body)
		.end();
};
