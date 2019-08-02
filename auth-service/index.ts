import express, { Response } from 'express';

const app = express();

app.get('/', (_, res: Response) => res.send('Hello from AUTH-service'));

const PORT = process.env.PORT || 9001;

app.listen(PORT, () => console.log(`Order-Service running on port: ${PORT}`));
