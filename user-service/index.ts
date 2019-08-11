import express, { Response } from 'express';

const app = express();

app.use(express.json());

app.get('/', (_, res: Response) =>
	res
		.status(200)
		.send('Hello from User Service')
		.end()
);

const PORT = process.env.PORT || 9002;

app.listen(PORT, () => console.log(`User Service running on: ${PORT}`));
