import express from 'express';

import { app } from './app';

async function start() {
	const expressApp = express();

	await app(expressApp);

	const PORT = process.env.PORT || 9000;
	expressApp.listen(PORT, () => console.log(`Server Running on PORT: ${PORT}`));
}

start();
