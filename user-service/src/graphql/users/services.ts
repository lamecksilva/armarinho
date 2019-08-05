/**
 * These functions contain the business logic of the API
 */
import { CreateUserInput, EditUserInput } from './types';
import { validateEditUserInput } from './validations';
import User from './model';

// ================================ Get all users from DB ===============================
export const getUsers = async (props: any) => {
	try {
		let users;

		props.id !== undefined
			? (users = await User.find({ _id: props.id }))
			: (users = await User.find({}));

		return users.map(u => {
			return { ...u._doc, password: null };
		});
	} catch (e) {
		throw new Error(e);
		console.error('Erro na função getUsers');
	}
};

// =============================== Edit and save user ====================================
export const editUser = async ({ id, email, name }: EditUserInput) => {
	try {
		// Validate input data
		let { isValid, errors } = validateEditUserInput({ id, email, name });

		if (!isValid) {
			return {
				user: null,
				errors
			};
		}

		if (!(await User.findOne({ _id: id }))) {
			errors.push({
				key: 'id',
				message: 'ID não encontrado no banco de dados'
			});

			return { user: null, errors };
		}

		const userUpdated: any = await User.findOneAndUpdate(
			{ _id: id },
			{ $set: { email, name } },
			{ new: true }
		);

		return {
			user: {
				...userUpdated._doc,
				password: null
			},
			errors
		};
	} catch (e) {
		console.log(e);

		throw new Error(e);
	}
};

// ================================ Creates a new user ====================================
export const saveUser = async ({ name, email, password }: CreateUserInput) => {
	try {
		// let errors = []
		// Create a new User from Model
		const newUser = await new User({ name, email, password });

		// Saving in the database
		const result = await newUser.save();

		// return created user
		return { ...result._doc, password: null };
	} catch (e) {
		throw new Error(e);
		console.log('Erro na funçao saveUser');
	}
};

// ================================ Delete user ================================
export const removeUser = async (props: any) => {
	try {
		let user: any;

		user = await User.findOneAndDelete({ _id: props.id });

		return { ...user._doc, password: null };
	} catch (e) {
		throw new Error(e);
		console.log('Erro na função removeUser');
	}
};
