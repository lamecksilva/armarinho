import { isEmail, isLength, equals as isEquals } from 'validator';
import { Types } from 'mongoose';

import isEmpty from '../utils/modules/is-empty';
import { ErrorObject, ValidationResponse } from './types';

//==================================================================================================
/**
 * validateCreateUserInput
 *
 * Function to validade create user input
 * @param data			Object with user new data
 */
export const validateCreateUserInput = (data: any): ValidationResponse => {
	let errors: ErrorObject = {};

	data.name = isEmpty(data.name) ? '' : data.name;
	data.email = isEmpty(data.email) ? '' : data.email;
	data.password = isEmpty(data.password) ? '' : data.password;
	data.password2 = isEmpty(data.password2) ? '' : data.password2;

	// Empty validations
	if (isEmpty(data.name)) {
		errors.name = 'O campo nome não pode ser vazio';
	}

	if (isEmpty(data.email)) {
		errors.email = 'O campo email não pode ser vazio';
	}

	if (isEmpty(data.password)) {
		errors.password = 'O campo senha não pode ser vazio';
	}

	if (isEmpty(data.password2)) {
		errors.password2 = 'O campo de confirmar senha não pode ser vazio';
	}

	// Lenght validations
	if (!isLength(data.name, { min: 2, max: 40 })) {
		errors.name = 'O nome deve conter entre 2 e 40 caracteres';
	}

	if (!isEmail(data.email)) {
		errors.email = 'Endereço de email inválido';
	}

	if (!isLength(data.password, { min: 6, max: 40 })) {
		errors.password = 'A senha deve conter entre 6 e 40 caracteres';
	}

	if (!isEquals(data.password, data.password2)) {
		errors.password2 = 'As senhas devem ser iguais';
	}

	return { isValid: isEmpty(errors), errors };
};

//==================================================================================================
/**
 * validateFindUserInput
 *
 * Function to validade and check fields
 *
 * @param {string} data ObjectId/Name/Email
 */
export const validateFindUserInput = (data: string) => {
	let queryType: string | null = null;

	if (data !== undefined) {
		if (isEmail(data)) {
			queryType = 'email';
		} else if (Types.ObjectId.isValid(data)) {
			queryType = 'id';
		} else {
			queryType = 'name';
		}
	} else {
		return (queryType = null);
	}

	return queryType;
};

//==================================================================================================
/**
 * validateEditUserInput
 *
 * Function to validade and check fields
 *
 * @param {string} data ObjectId/Name/Email
 */
export const validateEditUserInput = (data: any): ValidationResponse => {
	let errors: ErrorObject = {};

	data.name = isEmpty(data.name) ? '' : data.name;
	data.email = isEmpty(data.email) ? '' : data.email;

	// Empty validations
	if (isEmpty(data.name)) {
		errors.name = 'O campo nome não pode ser vazio';
	}

	if (isEmpty(data.email)) {
		errors.email = 'O campo email não pode ser vazio';
	}

	// Lenght validations
	if (!isLength(data.name, { min: 2, max: 40 })) {
		errors.name = 'O nome deve conter entre 2 e 40 caracteres';
	}

	if (!isEmail(data.email)) {
		errors.email = 'Endereço de email inválido';
	}

	return {
		isValid: isEmpty(errors),
		errors
	};
};

export const validateLoginInput = (data: any) => {
	let errors: ErrorObject = {};
	let type: string;

	data.username = isEmpty(data.username) ? '' : data.username;
	data.password = isEmpty(data.password) ? '' : data.password;

	if (isEmpty(data.username)) {
		errors.username = 'O campo username não pode ser vazio';
	}

	if (isEmpty(data.password)) {
		errors.password = 'O campo senha não pode ser vazio';
	}

	if (isEmail(data.username)) {
		type = 'email';
	} else {
		type = 'name';
	}

	return {
		isValid: isEmpty(errors),
		type,
		errors
	};
};
