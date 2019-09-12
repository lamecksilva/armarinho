import { Application } from 'express';

import expressLoader from './express.loader';
import sequelizeLoader from './sequelize.loader';

export default async (expressApp: Application) => {
	await expressLoader(expressApp);
	console.info('Express Initialized');

	const sequelizeConnection = await sequelizeLoader();
	sequelizeConnection
		.authenticate()
		.then(() => console.log('MYSQL Connected!!'))
		.catch(err => console.error(err));
};
