import express, { Response } from 'express';

const app = express();

app.get('/', (_, res: Response) => res.send('Hello from Payment-Service'));

const PORT = process.env.PORT || 9006;

app.listen(PORT, () =>
	console.log(`Payment-Service running on http:localhost:${PORT}`)
);
