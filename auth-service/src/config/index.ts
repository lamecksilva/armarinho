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
	process.env.MONGO_URL ||
	'mongodb://admin:adminPassword@localhost:27017/ArmarinhoAuthDB?authSource=admin';
export const databaseName = process.env.MONGO_DB_NAME || 'ArmarinhoAuthDB';
