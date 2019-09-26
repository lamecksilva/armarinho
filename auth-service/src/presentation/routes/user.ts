import { Router, Request, Response } from 'express';

import { UserService } from '../../services/user';

const router = Router();

const userRouter = (userService: UserService) => {
	router.get('/all', async (req: Request, res: Response) => {
		console.log(req.path);

		const users = await userService.getUsers();

		return res.status(200).json(users);
	});

	

	return router;
};

export default userRouter;
