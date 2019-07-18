import { getUsers } from '../../services';

export default {
	// Return all users
	users: async () => {
		const users = await getUsers();
		console.log(users);

		console.log('Return users');
		return users;
	},
	// Create a user
	createUser: async (args: any) => {
		console.log(args.data);

		return { _id: 'randomvalue', ...args.data };
	}
};
