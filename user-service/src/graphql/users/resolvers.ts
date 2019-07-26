import { getUsers, saveUser, removeUser } from './services';
import { validateCreateUserInput } from './validations';

export default {
	// Create a user
	createUser: async (_: any, props: any) => {
		// Validate input data
		const { isValid, errors } = await validateCreateUserInput(props);
		// Send errors to GraphQl
		if (!isValid)
			return {
				user: null,
				errors
			};

		// Saving the user in the database
		let user = await saveUser(props);

		// Return the user and errors array
		return {
			user,
			errors
		};
	},

	// Get all users or find one
	users: (_: any, props: any) => getUsers(props),

	// Delete a user from database
	deleteUser: (_: any, props: any) => removeUser(props)
};
