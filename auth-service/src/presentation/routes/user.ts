import { Router, Request, Response } from 'express';

import isEmpty from '../../utils/is-empty';
import { UserService } from '../../services/user';
import * as validators from '../../utils/validations';
import { User } from '../../domains';

const router = Router();

const userRouter = (userService: UserService) => {
	router.get('/', async (req: Request, res: Response) => {
		console.log(req.method, req.path);

		const users = await userService.getUsers();

		return res.status(200).json(users);
	});

	// Register a new user
	router.post(
		'/',
		validators.registerUser,
		async (req: Request, res: Response) => {
			const { errors, user } = await userService.saveUser(new User(req.body));

			if (!isEmpty(errors)) {
				return res.status(400).json({ success: false, errors });
			}

			return res.status(200).json({ success: true, user });
		}
	);

	router.put(
		'/:id',
		validators.updateUser,
		async (req: Request, res: Response) => {
			console.log(req.path);

			const { errors, user } = await userService.updateUser(
				req.params.id,
				req.body
			);

			if (!isEmpty(errors)) {
				return res.status(400).json({ success: false, errors });
			}

			return res.status(200).json({ success: true, user });
		}
	);

	return router;
};

export default userRouter;
