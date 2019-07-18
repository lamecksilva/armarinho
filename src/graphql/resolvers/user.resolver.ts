import { getUsers, createUser } from '../../services';
import { CreateUserInput } from '../../types/user';

export default {
	// Return all users
	users: async () => {
		console.log('Return users');
		const users = await getUsers();

		return users;
	},
	// Create a user
	createUser: async (args: CreateUserInput) => {
		const newUser = await createUser(args);

		return newUser;
	}
};
