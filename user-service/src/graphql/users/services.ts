import { hash, compare } from 'bcrypt';

import { CreateUserInput, EditUserInput } from './types';
import { validateEditUserInput, validateLoginUserInput } from './validations';
import User from './model';
import jwtSign from '../../utils/jwt-sign';
/**
 * These functions contain the business logic of the API
 */

// ================================ Get all users from DB ===============================
export const getUsers = async (props: any) => {
	try {
		let users;

		props.id !== undefined
			? (users = await User.find({ _id: props.id }))
			: (users = await User.find({}));

		props.email !== undefined
			? (users = await User.find({ email: props.email }))
			: (users = await User.find({}));

		return users.map((u: any) => {
			return { ...u._doc, password: null };
		});
	} catch (e) {
		console.error('Erro na função getUsers');
		console.error(e);

		throw new Error(e);
	}
};

// ================================ Creates a new user ====================================
export const saveUser = async (props: CreateUserInput) => {
	try {
		const { name, email, password } = props;

		// Create a new User from Model
		const newUser = await new User({
			name,
			email,
			password: await hash(password, 10)
		});

		// Saving in the database
		const result = await newUser.save();

		// return created user
		return { ...result._doc, password: null };
	} catch (e) {
		console.log('Erro na funçao saveUser');

		throw new Error(e);
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

// ================================ Login user =================================
export const generateJwtToken = async (props: any) => {
	// Validate user input
	const { isValid, errors } = await validateLoginUserInput(props);

	// If not is valid, return errors
	if (!isValid)
		return {
			token: null,
			errors
		};

	// Find user by email
	let user = await User.findOne({ email: props.email });

	// If user not exists in db, returns error
	if (!user) {
		errors.push({ key: 'email', message: 'Nenhum usuário encontrado' });

		return {
			token: null,
			errors
		};
	}

	// Verify password
	const isMatch = await compare(props.password, user.password);

	// If password is incorrect, returns error
	if (!isMatch) {
		console.log('Senha incorreta ladrão');

		errors.push({ key: 'password', message: 'Senha incorreta' });

		return {
			token: null,
			errors
		};
	}

	// Generate token
	let token = await jwtSign({ ...user._doc, password: null }, 'secret');

	return { token, errors };
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
