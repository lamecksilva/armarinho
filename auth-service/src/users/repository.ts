import { hash, compare } from 'bcrypt';

import User from './model';
import { SaveUserType, ErrorObject } from './types';
import jwtSign from '../utils/jwt-sign';

// =================================================================================================
/**
 * saveUser
 *
 * Function to save user in the database
 *
 * @param {object} data
 */
export const saveUser = async (data: SaveUserType) => {
	const { name, email, password } = data;
	let error: ErrorObject = {};
	let user: any;

	user = await User.findOne({ email }, { password: 0 });

	if (user) {
		error.email = 'Email já cadastrado';

		return {
			savedUser: null,
			error
		};
	}

	user = await User.findOne({ name }, { password: 0 });

	if (user) {
		error.name = 'Name já cadastrado';

		return {
			savedUser: null,
			error
		};
	}

	const newUser = await new User({
		name,
		email,
		password: await hash(password, 10)
	});

	let userSaved = await newUser.save();

	return { savedUser: { ...userSaved._doc, password: null }, error };
};

// =================================================================================================
/**
 * findUsers
 *
 * Function to find user(s) in db
 *
 * @param {string} Query id/email/name
 */
export const queryUser = async (query: string, queryType: string | null) => {
	let user;
	let error: ErrorObject = {};

	if (queryType === 'id') {
		user = await User.findOne({ _id: query }, { password: 0, __v: 0 });

		if (!user) {
			error.query = 'ID não encontrado no banco de dados';
		}

		return { user, error };
	}

	if (queryType === 'email') {
		user = await User.findOne({ email: query }, { password: 0, __v: 0 });

		if (!user) {
			error.query = 'Email não encontrado no banco de dados';
		}

		return { user, error };
	}

	if (query === 'name') {
		user = await User.findOne({ name: query }, { password: 0, __v: 0 });

		if (!user) {
			error.query = 'Nome não encontrado no bando de dados';
		}

		return { user, error };
	}

	return { user, error };
};

// =================================================================================================
/**
 *	findUsers
 *
 *	Function to find all users in db
 */
export const findUsers = async () => {
	const users = await User.find({}, { password: 0, __v: 0 });

	return users;
};

// =================================================================================================
/**
 *	updateUser
 *
 *	Function to find and update user
 *
 * 	@param {object} data Email and name to update
 * 	@param {string} id ID of the user
 *
 */
export const updateUser = async (data: any, id: string) => {
	const error: ErrorObject = {};

	const user = await User.findOne({ _id: id });

	if (!user) {
		error.id = 'ID not found';
		return { error, user: null };
	}

	const updatedUser: any = await User.findOneAndUpdate(
		{ _id: id },
		{
			$set: { email: data.email, name: data.name }
		},
		{
			new: true
		}
	);

	return { user: updatedUser._doc, error };
};

// =================================================================================================
/**
 *	removeUser
 *
 *	Function to find and delete user
 *
 * 	@param {string} id ID of the user
 *
 */
export const removeUser = async (id: string) => {
	const error: ErrorObject = {};

	const user = await User.findOneAndDelete({ _id: id });

	if (!user) {
		error.id = 'ID not found';

		return {
			user: null,
			error
		};
	}

	return { user, error };
};

// =================================================================================================
/**
 *	validateUser
 *
 *	Function to find and check cretentials
 *
 * 	@param {object} data name/email and password of the user
 *  @param {string} type Type of username
 */
export const validateUser = async (data: any, type: string) => {
	const error: ErrorObject = {};
	let user: any;

	type === 'email'
		? (user = await User.findOne({ email: data.username }))
		: type === 'name'
		? (user = await User.findOne({ name: data.username }))
		: null;

	if (!user) {
		error.email = 'Email não encontrado';

		return { error, token: null };
	}

	const isValid = await compare(data.password, user.password);

	if (!isValid) {
		error.password = 'Senha incorreta';

		return { error, token: null };
	}

	user = { ...user, password: null };

	const token = await jwtSign(user, process.env.SECRET_OR_KEY || 'secret');

	return { token, error };
};
