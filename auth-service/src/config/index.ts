import express, { Application } from 'express';
import cors from "cors"

import db from './db';

export default async (app: Application) => {
	await db();

	app.use(express.json());
	app.use(cors())
	return app;
};
