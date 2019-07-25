require('dotenv').config();
import express, { Response } from 'express';
import graphqlHTTP from 'express-graphql';

import applyConfigs from './config';
import graphQlSchema from './graphql/schema';
// import graphQlResolvers from './graphql/resolvers';

const app = express();

// Test Route
app.get('/', (_, res: Response) => {
	res.send('Hello User Service!');
});

// Apply configs
applyConfigs(app);

// Using graphql server for express
app.use(
	'/graphql',
	graphqlHTTP({
		schema: graphQlSchema,
		// rootValue: graphQlResolvers,
		graphiql: process.env.NODE_ENV === 'development'
	})
);

// PORT of express app
const PORT = process.env.PORT || 9001;

app.listen(PORT, () => {
	console.log(`User service com sucesso em: http://localhost:${PORT}`);
	console.log(`Grahiql rodando em: http:localhost:${PORT}/graphql`);
});

// Exporting server (this is for tests)
export default app;
