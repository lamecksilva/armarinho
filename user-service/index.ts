require('dotenv').config();
import express, { Response } from 'express';
import graphqlHTTP from 'express-graphql';
import morgan from 'morgan';

import applyConfigs from './src/config';
import graphQlSchema from './src/graphql/schema';
import isAuth from './src/utils/is-auth';
// import graphQlResolvers from './graphql/resolvers';

const app = express();

// Apply configs
applyConfigs();

app.use(
	morgan(':method :url :status :res[content-length] - :response-time ms')
);

// Test Route
app.get('/', (_, res: Response) => {
	res.send('Hello From User Service!').end();
});

app.use(isAuth);

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

process.on('SIGINT', code => {
	console.log(`  About to exit with code: ${code}`);
	process.exit(1);
});

// Exporting server (this is for tests)
export default app;
