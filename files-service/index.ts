import express, { Response } from 'express';

import applyRoutes from './app';

const app = express();

app.get('/', (_, res: Response) => res.send('Hello from Files-service'));

applyRoutes(app);

const PORT = process.env.PORT || 9005;

app.listen(PORT, () => console.log(`Files-Service running on port: ${PORT}`));
