require('dotenv').config();
import express, { Response, Request } from 'express';
import graphqlHTTP from 'express-graphql';
import { buildSchema } from 'graphql';

import applyConfigs from './config';

const app = express();

// Test Route
app.get('/', (_, res: Response) => {
	res.send('Hello ts-node!');
});

// Apply configs
applyConfigs(app);

let str = 'Hello World';
let userObject = {
	name: 'Lamec',
	age: 18
};

const graphQlSchema = buildSchema(`
	type User {
		name: String!
		age: Int!
		email: String
	}

  type RootQuery {
		str: String!	
		user: User!
	}

	type RootMutation {
		changeStr(newStr: String): String
		changeUserData(newUser: User): User
	}

	schema {
		query: RootQuery
		mutation: RootMutation
	}
`);

const root = {
	changeStr: async (args: any, req: Request) => {
		str = await args.newStr;
		console.log(req.headers.authorization);

		return str;
	},
	str: () => {
		return str;
	},
	user: () => {
		return userObject;
	},
	changeUserData: async (args: any, req: Request) => {
		userObject = await args.newUser;

		console.log(req.headers.authorization);
		console.log(args);

		return userObject;
	}
};

app.use(
	'/graphql',
	graphqlHTTP({
		schema: graphQlSchema,
		rootValue: root
		// graphiql: true
	})
);

const PORT = process.env.PORT || 9000;

app.listen(PORT, () => {
	console.log(`[SERVER] Running at http://localhost:${PORT}`);
});

// Exporting server (this is for tests)
export default app;
