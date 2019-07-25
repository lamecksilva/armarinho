import { Request, Response } from 'express';
import User from '../graphql/users/model';

export const createUser = async (req: Request, res: Response) => {
	const { name, email, password } = req.body;

	let user = await User.findOne({ email });

	if (!user) {
		user = await User.create({ name, email, password });

		res.status(201).json({ success: true, user });
	}
};
