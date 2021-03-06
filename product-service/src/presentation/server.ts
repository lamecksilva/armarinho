// Presentation Layer
/**
 * Server
 * Route files
 * Error formats
 */
import express from 'express';

import { applyRoutes } from './app';

export const start = async () => {
	const app = express();

	const PORT = process.env.PORT || 9002;

	await applyRoutes(app);

	app.get('/', (_: express.Request, res: express.Response) => {
		return res.send('Product Service Online');
	});

	app.listen(PORT, () => console.log(`Server Running on PORT: ${PORT}`));
};
