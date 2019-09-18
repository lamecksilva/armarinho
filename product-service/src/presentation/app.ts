import express, { Application } from 'express';

import { productRoutes } from './routes';
import { syncTables } from '../libs/sync-tables';

export const applyRoutes = async (app: Application) => {
	syncTables();

	await app.use(express.json());

	await app.use('/product', productRoutes);
	console.log('Applyed routes');
};
