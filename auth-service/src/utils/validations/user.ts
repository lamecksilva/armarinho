import { isLength, isEmail, equals as isEquals } from 'validator';
import { Request, Response, NextFunction } from 'express';

import { isEmpty } from '../modules';

interface ErrorObject {
	[key: string]: string;
}

/**
 * registerUser
 *
 * Middleware to validate register user route
 *
 * @param req
 * @param res
 * @param next
 */
export const registerUser = (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	let errors: ErrorObject = {};
	const data: any = req.body;

	data.name = isEmpty(data.name) ? '' : data.name;
	data.email = isEmpty(data.email) ? '' : data.email;
	data.password = isEmpty(data.password) ? '' : data.password;
	data.password2 = isEmpty(data.password2) ? '' : data.password2;

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

	if (isEmpty(errors)) {
		return next();
	} else {
		return res.status(400).json({ success: false, errors });
	}
};

/**
 * updateUser
 *
 * Middleware to validate update user route
 *
 * @param req
 * @param res
 * @param next
 */
export const updateUser = (req: Request, res: Response, next: NextFunction) => {
	let errors: ErrorObject = {};
	const data: any = req.body;

	data.name = isEmpty(data.name) ? '' : data.name;
	data.email = isEmpty(data.email) ? '' : data.email;

	console.log(req.params);
	console.log(req.body);

	// Lenght validations
	if (!isLength(data.name, { min: 2, max: 40 })) {
		errors.name = 'O nome deve conter entre 2 e 40 caracteres';
	}

	if (!isEmail(data.email)) {
		errors.email = 'Endereço de email inválido';
	}

	if (!req.params.id.match(/^[0-9a-fA-F]{24}$/)) {
		errors.id = 'ID inválido';
	}

	if (isEmpty(data.email)) {
		errors.email = 'O campo email não pode ser vazio';
	}

	if (isEmpty(data.name)) {
		errors.name = 'O campo nome não pode ser vazio';
	}
	if (isEmpty(errors)) {
		return next();
	} else {
		return res.status(400).json({ success: false, errors });
	}
};
