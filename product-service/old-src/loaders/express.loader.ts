import express, { Application, Response } from 'express';
import cors from 'cors';

// import { productRoutes} from "../api/routes"

export default async (expressApp: Application) => {
	expressApp.use(cors());
	expressApp.use(express.json());
	expressApp.use(express.urlencoded({ extended: false }));

	expressApp.get('/', (_, res: Response) =>
		res.send('Hello from Product-service')
	);

	return expressApp;
};
