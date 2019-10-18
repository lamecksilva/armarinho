import { Request, Response, NextFunction } from 'express';

import { jwtVerifyAsync } from '../';
import { secretOrKey } from '../../config';

/**
 * validateRequest
 *
 * Middleware to validate request
 *
 * @param req
 * @param res
 * @param next
 */
export async function validateRequest(
	req: Request,
	res: Response,
	next: NextFunction
) {
	if (!req.headers.authorization) {
		return res.status(400).send('NO ACCESS TOKEN PROVIDED');
	}

	if (!(await jwtVerifyAsync(req.headers.authorization, secretOrKey))) {
		return res.status(400).send('ACCESS TOKEN NOT VALID');
	}

	return next();
}
