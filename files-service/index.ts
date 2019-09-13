import express from 'express';
import loaders from './src/loaders';

const startServer = async () => {
	const app = express();

	const PORT = process.env.PORT || 9005;

	await loaders(app);

	app.listen(PORT, () =>
		console.info(
			`${new Date(Date.now()).toLocaleTimeString(
				'pt-BR'
			)} Files-Service running on port: ${PORT}`
		)
	);
};

startServer();
