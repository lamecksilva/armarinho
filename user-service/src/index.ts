import { Application } from 'express';

import applyConfigs from './config';
import userRoutes from './users/router';

export default async (app: Application) => {
	await applyConfigs(app);

	app.use('/', userRoutes);

	return app;
};
