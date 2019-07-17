import { buildSchema } from 'graphql';

export default buildSchema(`
	type User {
    _id: ID!
		name: String!
		email: String!
	}

	input CreateUserInput {
		name: String!
    email: String!
    password: String!
	}

  type RootQuery {
		users: [User!]!
	}

	type RootMutation {
		createUser(data: CreateUserInput): User
	}

	schema {
		query: RootQuery
		mutation: RootMutation
	}
`);
