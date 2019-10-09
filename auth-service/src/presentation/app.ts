import { Application, json } from 'express';

import { databaseName, mongoUrl } from '../config';
import { createConnection } from '../data/connections/mongodb';

import { UserRepository } from '../data/repositores';
import { UserService } from '../services';
import { userRouter } from '../presentation/routes';

export const app = async (app: Application) => {
	app.use(json());

	const mongodbConnection = await createConnection({
		dbName: databaseName,
		uri: mongoUrl
	});

	/**
	 * User repository, service and routes/controllers
	 */
	const userRepository = new UserRepository(mongodbConnection);
	const userService = new UserService(userRepository);
	app.use('/users', userRouter(userService));
};
