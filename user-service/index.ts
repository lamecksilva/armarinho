import express, { Response } from 'express';

const app = express();

app.get('/', (_, res: Response) => res.send('Hello from user service'));

const PORT = process.env.PORT || 9004;

app.listen(PORT, () => console.log(`User Service running on PORT: ${PORT}`));
