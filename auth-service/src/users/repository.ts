import { hash } from 'bcrypt';

import User from './model';
import { SaveUserType, ErrorObject } from './types';

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

	const user = await User.findOne({ email }, { password: 0 });

	if (user) {
		error.email = 'Email já cadastrado';

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

		console.log(user);

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

		console.log(user);

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
 */
export const updateUser = async (data: any, id: string) => {
	const error: ErrorObject = {};

	const user = await User.findOne({ _id: id });

	if (!user) {
		error.id = 'ID for this user not found';
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
