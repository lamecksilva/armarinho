/**
 * These functions contain the business logic of the API
 */

import { CreateUserInput } from './types';
import User from './model';

// Get all users from DB
export const getUsers = async (props: any) => {
	try {
		let users;

		props.id !== undefined
			? (users = await User.find({ _id: props.id }))
			: (users = await User.find({}));

		return users.map(u => {
			return { ...u._doc, password: null };
		});
	} catch (e) {
		throw new Error(e);
		console.error('Erro na função getUsers');
	}
};

// Creates a new user
export const saveUser = async ({ name, email, password }: CreateUserInput) => {
	try {
		// Create a new User from Model
		const newUser = await new User({ name, email, password });

		// Saving in the database
		const result = await newUser.save();

		// return created user
		return { ...result._doc, password: null, __v: null };
	} catch (e) {
		throw new Error(e);
		console.log('Erro na funçao saveUser');
	}
};
