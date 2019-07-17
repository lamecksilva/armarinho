// import { Request } from 'express';
import { User } from "../../types/user"

let users: Array<User> = [];

export default {
	users: () => {
		console.log('Return users');

		return users.map(user => {
			return { ...user, password: null };
		});
	},
	createUser: async (args: any) => {
		console.log(args.data);

		users.push({ ...args.data, _id: 'randomvalue' });

		return { _id: 'randomvalue', ...args.data };
	}
};
