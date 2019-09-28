import { Application, json } from 'express';

import { databaseName, mongoUrl } from '../config';
import { createConnection } from '../data/connections/mongodb';
import { UserRepository } from '../data/repositores/user';
import { UserService } from '../services/user';
import userRouter from '../presentation/routes/user';

export const app = async (app: Application) => {
	await app.use(json());

	const mongodbConnection = await createConnection({
		dbName: databaseName,
		uri: mongoUrl
	});

	const userRepository = new UserRepository(mongodbConnection);
	const userService = new UserService(userRepository);

	app.use('/users', userRouter(userService));
};
