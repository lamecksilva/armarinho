import { hash } from 'bcrypt';

import User from './model';
import { SaveUserType, ErrorObject } from './types';

/** ================================================================================================
 * saveUser
 *
 * Function to save user in the database
 *
 * @param {object} data
 */
export const saveUser = async (data: SaveUserType) => {
	const { name, email, password } = data;
	let error: ErrorObject = {};

	const user = await User.findOne(email, { password: 0 });

	if (user) {
		error.email = 'Email já cadastrado';

		return {
			savedUser: null,
			error
		};
	}

	const newUser = new User({
		name,
		email,
		password: await hash(password, 10)
	});

	let userSaved = await newUser.save();

	delete userSaved.password;

	return { savedUser: userSaved._doc, error };
};

/** ================================================================================================
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
		user = await User.findOne({ _id: query });

		if (!user) {
			error.query = 'ID não encontrado no banco de dados';
		}

		return { user, error };
	}

	if (queryType === 'email') {
		user = await User.findOne({ email: query });

		if (!user) {
			error.query = 'Email não encontrado no banco de dados';
		}

		return { user, error };
	}

	if (query === 'name') {
		user = await User.findOne({ name: query });

		if (!user) {
			error.query = 'Nome não encontrado no bando de dados';
		}

		return { user, error };
	}

	return { user, error };
};


/** ================================================================================================
 * 
 * 
 * 
 */
