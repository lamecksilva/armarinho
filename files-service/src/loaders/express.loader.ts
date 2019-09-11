import express, { Application, Response } from 'express';
import cors from 'cors';

import { imageRoutes } from '../api/routes';

export default async (expressApp: Application) => {
	expressApp.use(cors());
	expressApp.use(express.json());
	expressApp.use(express.urlencoded({ extended: false }));
	expressApp.use('/static', express.static('static'));

	expressApp.get('/', (_, res: Response) =>
		res.send('Hello from Files-service')
	);

	expressApp.use('/images', imageRoutes);

	return expressApp;
};
