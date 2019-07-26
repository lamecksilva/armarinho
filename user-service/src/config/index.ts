// import { Express } from 'express';
import db from './db';

export default async (/* app: Express */) => {
	// applyRoutes(app);

	await db();
};
