import { getUsers, saveUser, removeUser } from './services';

export default {
	// Create a user
	createUser: (_: any, props: any) => saveUser(props),

	// Get all users or find one
	users: (_: any, props: any) => getUsers(props),

	// Delete a user from database
	deleteUser: (_: any, props: any) => removeUser(props)
};
