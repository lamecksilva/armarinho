require('dotenv').config();
import express, { Response } from 'express';
import graphqlHTTP from 'express-graphql';
import morgan from 'morgan';

import applyConfigs from './src/config';
import graphQlSchema from './src/graphql/schema';
// import graphQlResolvers from './graphql/resolvers';

const app = express();

// Apply configs
applyConfigs();

app.use(
	morgan(':method :url :status :res[content-length] - :response-time ms')
);

// Test Route
app.get('/', (_, res: Response) => {
	res.send('Hello User Service!');
});

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
const PORT = process.env.PORT || 9002;

app.listen(PORT, () =>
	console.log(`User Service running on: http://localhost:${PORT}`)
);

// Exporting server (this is for tests)
export default app;
