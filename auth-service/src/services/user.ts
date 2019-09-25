import { Request, Response } from 'express';

// import { UserType} from "../domains/index"

export class UserService {
	async getUsers(_: Request, res: Response) {
		return res.status(200).json({ message: 'Hello Users' });
	}
}
