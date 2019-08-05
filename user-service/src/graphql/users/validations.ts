import { isEmail, isLength, equals as isEquals } from 'validator';

import isEmpty from '../../utils/is-empty';
import { ErrorType, ValidationResponse } from './types';

// ============================= Validate the create user input ===================================
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

	if (isEmpty(data.password2)) {
		errors.push({
			key: 'password2',
			message: 'O campo de confirmar senha não pode ser vazio'
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

	if (!isEquals(data.password, data.password2)) {
		errors.push({
			key: 'password2',
			message: 'As senhas devem ser iguais'
		});
	}

	return { isValid: isEmpty(errors), errors };
};

// ============================= Validate edit user input =================================
export const validateEditUserInput = (data: any) => {
	let errors: Array<ErrorType> = [];

	if (!isEmpty(data.name)) {
		if (!isLength(data.name, { min: 2, max: 40 })) {
			errors.push({
				key: 'name',
				message: 'O nome deve conter entre 2 e 40 caracteres'
			});
		}
	}

	if (!isEmpty(data.email)) {
		if (!isEmail(data.email)) {
			errors.push({ key: 'email', message: 'Endereço de email inválido' });
		}
	}

	return { isValid: isEmpty(errors), errors };
};

// ============================= Validate login user input =================================

export const validateLoginUserInput = (data: any) => {
	let errors: Array<ErrorType> = [];

	if (isEmpty(data.email)) {
		errors.push({ key: 'email', message: 'O campo email não pode ser vazio' });
	}

	if (isEmpty(data.password)) {
		errors.push({
			key: 'password',
			message: 'O campo senha não pode ser vazio'
		});
	}

	if (!isEmail(data.email)) {
		errors.push({ key: 'email', message: 'Endereço de email inválido' });
	}

	return { isValid: isEmpty(errors), errors };
};
