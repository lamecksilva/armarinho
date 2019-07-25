import { Express } from 'express';
import applyRoutes from './routes';
import db from './db';

export default async (app: Express) => {
	applyRoutes(app);

	await db();
};
