import express, { Response } from 'express';
import { start } from 'elastic-apm-node';

start({
	serviceName: 'NameTest',
	serverUrl: 'http://localhost:8200'
});

import applyRoutes from './app';

const app = express();

app.get('/', (_, res: Response) => res.send('Hello from Files-service'));

applyRoutes(app);

const PORT = process.env.PORT || 9005;

app.listen(PORT, () =>
	console.log(
		`${new Date(Date.now()).toLocaleTimeString(
			'pt-BR'
		)}Files-Service running on port: ${PORT}`
	)
);
