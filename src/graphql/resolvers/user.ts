import { Request } from 'express';

let str = 'Hello World';
let userObject = {
	name: 'Lamec',
	age: 18
};

export default {
	changeStr: async (args: any, req: Request) => {
		str = await args.newStr;
		console.log(req.headers.authorization);

		return str;
	},
	str: () => {
		console.log('Return str');

		return str;
	},
	user: () => {
		console.log('Return user');

		return userObject;
	},
	changeUserData: async (args: any, req: Request) => {
		userObject = await args.newUser;

		console.log(req.headers.authorization);
		console.log(args);

		return userObject;
	}
};
