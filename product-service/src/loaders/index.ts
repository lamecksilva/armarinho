import { Application } from 'express';

import expressLoader from './express.loader';

export default async (expressApp: Application) => {
	await expressLoader(expressApp);
	console.info('Express Initialized');
};
