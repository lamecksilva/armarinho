import { User } from '../models';

export const getUsers = async () => {
	console.debug('getUsers');

	try {
		const users = await User.find({});

		return users.map(u => {
			u._id, u.name, u.email;
		});
	} catch (e) {
		throw new Error(e);
		console.error('Erro na função getUsers');
	}
};
export const teste = (): void => {
	console.log('Hello');
};
