import express, { Response } from 'express';

const app = express();

app.get('/', (_, res: Response) => res.send('Hello from Files-service'));

const PORT = process.env.PORT || 9005;

app.listen(PORT, () => console.log(`Files-Service running on port: ${PORT}`));