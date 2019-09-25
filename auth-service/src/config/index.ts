// import express, { Application } from 'express';
// import cors from "cors"

// import db from './db';

// export default async (app: Application) => {
// 	await db();

// 	app.use(express.json());
// 	app.use(cors())
// 	return app;
// };

export const mongoUrl =
	'mongodb://admin:adminPassword@localhost:27017/ArmarinhoAuthDB?authSource=admin';
export const databaseName = 'ArmarinhoAuthDB';
