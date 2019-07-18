require('dotenv').config();
import express, { Response } from 'express';
import graphqlHTTP from 'express-graphql';

import applyConfigs from './config';
import graphQlSchema from './graphql/schema';
import graphQlResolvers from './graphql/resolvers';

const app = express();

// Test Route
app.get('/', (_, res: Response) => {
	res.send('Hello ts-node!');
});

// Apply configs
applyConfigs(app);

// Using graphql server for express
app.use(
	'/graphql',
	graphqlHTTP({
		schema: graphQlSchema,
		rootValue: graphQlResolvers,
		graphiql: true
	})
);

// PORT of express app
const PORT = process.env.PORT || 9000;

app.listen(PORT, () => {
	console.log(`Servidor rodando com sucesso em: http://localhost:${PORT}`);
	console.log(`Grahiql rodando em: http:localhost:${PORT}/graphql`);
});

// Exporting server (this is for tests)
export default app;
