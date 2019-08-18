import { Request, Response } from 'express';

import {
	validateCreateUserInput,
	validateFindUserInput,
	validateEditUserInput,
	validateLoginInput
} from './validation';
import {
	saveUser,
	queryUser,
	findUsers,
	updateUser,
	removeUser,
	validateUser
} from './repository';
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
export const deleteUser = async (req: Request, res: Response) => {
	const { id } = req.params;

	const { user, error } = await removeUser(id);

	if (!isEmpty(error)) {
		return res
			.status(400)
			.json({ success: false, errors: error })
			.end();
	}

	return res
		.status(200)
		.json({ success: true, user })
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
export const loginUser = async (req: Request, res: Response) => {
	const { errors, isValid, type } = await validateLoginInput(req.body);

	if (!isValid) {
		return res.status(400).json({ success: false, errors });
	}

	const { token, error } = await validateUser(req.body, type);

	if (!isEmpty(error)) {
		return res
			.status(400)
			.json({ success: false, errors: error })
			.end();
	}

	return res
		.status(200)
		.json({ success: true, token, expiresIn: '1h' })
		.end();
};
