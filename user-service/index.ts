import express, { Response } from 'express';

import App from "./src"

const app = express();

// Apply configuration, routes, middlewares etc
App(app)

app.get('/', (_, res: Response) =>
	res
		.status(200)
		.send('Hello from User Service')
		.end()
);

const PORT = process.env.PORT || 9002;

app.listen(PORT, () => console.log(`User Service running on: ${PORT}`));
