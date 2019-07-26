import { isEmail, isLength } from 'validator';

import isEmpty from '../../utils/is-empty';

interface ErrorType {
	key: string;
	message: string;
}

interface ValidationResponse {
	isValid: boolean;
	errors: Array<ErrorType>;
}

export const validateCreateUserInput = (data: any): ValidationResponse => {
	let errors: Array<ErrorType> = [];

	// Empty validations
	if (isEmpty(data.name)) {
		errors.push({ key: 'name', message: 'O campo nome não pode ser vazio' });
	}

	if (isEmpty(data.email)) {
		errors.push({ key: 'email', message: 'O campo email não pode ser vazio' });
	}

	if (isEmpty(data.password)) {
		errors.push({
			key: 'password',
			message: 'O campo senha não pode ser vazio'
		});
	}

	// Lenght validations
	if (!isLength(data.name, { min: 2, max: 40 })) {
		errors.push({
			key: 'name',
			message: 'O nome deve conter entre 2 e 40 caracteres'
		});
	}

	if (!isEmail(data.email)) {
		errors.push({ key: 'email', message: 'Endereço de email inválido' });
	}

	if (!isLength(data.password, { min: 6, max: 40 })) {
		errors.push({
			key: 'password',
			message: 'A senha deve conter entre 6 e 40 caracteres'
		});
	}

	return { isValid: isEmpty(errors), errors };
};
