import { hash } from 'bcrypt';

import User from './model';
import { SaveUserType } from './types';

export const saveUser = async (data: SaveUserType) => {
	const { name, email, password } = data;

	const newUser = new User({
		name,
		email,
		password: await hash(password, 10)
	});

	let userSaved = await newUser.save();

	delete userSaved.password;

	return { ...userSaved._doc };
};
