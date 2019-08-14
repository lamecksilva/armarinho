import express, { Application } from 'express';

import db from './db';

export default async (app: Application) => {
	await db();

	app.use(express.json());
	return app;
};
