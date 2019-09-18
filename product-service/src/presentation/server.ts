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

	const PORT = process.env.PORT || 9000;

	await applyRoutes(app);

	app.get('/', (req: express.Request, res: express.Response) => {
		return res.send('Product service online!! ' + req.host);
	});

	app.listen(PORT, () => console.log(`Server Running on PORT: ${PORT}`));
};
