import { CreateUserInput } from '../types/user';
import { User } from '../models';

// Get all users from DB
export const getUsers = async (id: string) => {
	try {
		let users;

		id !== undefined
			? (users = await User.find({ _id: id }))
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
export const createUser = async ({ newUserData }: CreateUserInput) => {
	try {
		// Create a new User from Model
		const newUser = await new User(newUserData);

		// Saving in the database
		const result = await newUser.save();

		// return created user
		return { ...result._doc, password: null, __v: null };
	} catch (e) {
		throw new Error(e);
		console.log('Erro na funçao createUser');
	}
};
