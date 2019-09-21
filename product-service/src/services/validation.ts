import { isLength } from 'validator';
import { Request, Response, NextFunction } from 'express';

import isEmpty from '../libs/is-empty';

interface InsertProductError {
	name?: string;
	category?: string;
	size?: string;
}

export const validateInsertProduct = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	const errors: InsertProductError = {};

	const name = isEmpty(req.body.name) ? req.body.name : '';
	const category = isEmpty(req.body.category) ? req.body.category : '';
	const size = isEmpty(req.body.size) ? req.body.size : '';

	if (!isLength(name, { min: 4, max: 75 })) {
		errors.name = 'O campo nome precisa estar entre 4 e 75 caracteres';
	}

	if (isEmpty(name)) {
		errors.name = 'O campo nome não pode ser vazio';
	}

	return isEmpty(errors)
		? next()
		: res.status(400).json({ success: false, errors });
};
