import { Router, Request, Response } from 'express';
// import { RedisClient } from 'redis';

import { AuthService } from '../../services';
import {
	ErrorResponseHandler,
	SuccessResponseHandler,
	isEmpty
} from '../../utils';

const router = Router();

/**
 * authRoutes
 *
 * @param authService
 */
export const authRoutes = (authService: AuthService) => {
	/**
	 * POST /auth/login
	 */
	router.post('/login', async (req: Request, res: Response) => {
		const { errors, token } = await authService.loginUser({
			email: req.body.email,
			password: req.body.password
		});

		if (!isEmpty(errors)) {
			return ErrorResponseHandler(res, 400, errors, 'Ocorreu um erro no login');
		}
		return SuccessResponseHandler(res, 200, token);
	});

	return router;
};
