import { isEmail, isLength, equals as isEquals } from 'validator';
import { Types } from 'mongoose';

import isEmpty from '../utils/is-empty';
import { ErrorObject, ValidationResponse } from './types';
import { isString } from 'util';

/**
 * validateCreateUserInput
 *
 * Function to validade create user input
 * @param data			Object with user new data
 */
export const validateCreateUserInput = (data: any): ValidationResponse => {
	let errors: ErrorObject = {};

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
		}

		if (Types.ObjectId.isValid(data)) {
			queryType = 'id';
		}

		if (isString(data)) {
			queryType = 'name';
		}
	} else {
		return (queryType = null);
	}

	return queryType;
};
