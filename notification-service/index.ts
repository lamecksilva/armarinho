import express, { Response } from 'express';

const app = express();

app.get('/', (_, res: Response) => res.send('Hello from Notification-Service'));

const PORT = process.env.PORT || 9005;

app.listen(PORT, () =>
	console.log(`Notification Service running on http://localhost:${PORT}`)
);
