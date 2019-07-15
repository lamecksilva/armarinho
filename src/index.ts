require('dotenv').config();
import express, { Response } from 'express';
const graphqlHTTP = require('express-graphql');
const { buildSchema } = require('graphql');

import applyConfigs from './config';

const app = express();

// Test Route
app.get('/', (_, res: Response) => {
  res.send('Hello ts-node!');
});

// Apply configs
applyConfigs(app);

const schema = buildSchema(`
  type Query {
    hello: String
  }
`);

const root = {
  hello: () => {
    return 'Hello world!';
  }
};

app.use(
  '/graphql',
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true
  })
);

const PORT = process.env.PORT || 9000;

app.listen(PORT, () => {
  console.log(`[SERVER] Running at http://localhost:${PORT}`);
});

// Exporting server (this is for tests)
export default app;
