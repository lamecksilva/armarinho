import { getUsers, saveUser } from './services';

export default {
	// Create a user
	createUser: (_: any, props: any) => saveUser(props),

	// Get all users or find one
	users: (_: any, props: any) => getUsers(props)
};
