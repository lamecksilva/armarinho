import { isEmail, isLength, equals as isEquals } from 'validator';

import isEmpty from '../utils/is-empty';
import { ErrorObject, ValidationResponse } from './types';

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
