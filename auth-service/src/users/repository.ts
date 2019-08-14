import { hash } from 'bcrypt';

import User from './model';
import { SaveUserType, ErrorObject } from './types';

export const saveUser = async (data: SaveUserType) => {
	const { name, email, password } = data;
	let error: ErrorObject = {}
	
	const user = await User.findOne(email, {password: 0})

	if (user){
		error.email = "Email já cadastrado"

		return {
			savedUser: null,
			error
		}
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
