import { getUsers, createUser } from '../../services';
import { CreateUserInput, UserQuery } from '../../types/user';

export default {
	// Return all users
	users: async (query: UserQuery) => {
		const users = await getUsers(query.id);

		return users;
	},
	// Create a user
	createUser: async (args: CreateUserInput) => {
		const newUser = await createUser(args);

		return newUser;
	}
};
