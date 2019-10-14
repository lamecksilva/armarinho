import { Application, json } from 'express';

import { databaseName, mongoUrl } from '../config';
import { createMongoDBConnection } from '../data/connections/mongodb';
// import { createRedisConnection } from '../data/connections/redis';

import { UserRepository } from '../data/repositores';
import { UserService, AuthService } from '../services';
import { userRouter, authRoutes } from '../presentation/routes';

export const app = async (app: Application) => {
	app.use(json());

	const mongodbConnection = await createMongoDBConnection({
		dbName: databaseName,
		uri: mongoUrl
	});

	// const redisConnection = await createRedisConnection();

	/**
	 * User repository, service and routes/controllers
	 */
	const userRepository = new UserRepository(mongodbConnection);
	const userService = new UserService(userRepository);
	app.use('/users', userRouter(userService));

	/**
	 * Auth service, routes/controllers
	 */
	const authService = new AuthService(userRepository);
	app.use('/login', authRoutes(authService));
};
