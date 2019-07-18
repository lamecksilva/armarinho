import { buildSchema } from 'graphql';

// Build the GraphQL Schema

/*  EXPLAIN THE BASICS
RootQuery and RootMutation links with the resolvers object, e.g.:

buildSchema(`

type RootQuery {
	users: User!
}

type RootMutation {
	createUser(newUser: UserInput): User
}

`)

In this case, the resolvers object must have a "users" key (function) and a "createUser" (function), like this:

export default {
	users: () => {
		return users
	},
	createUser: (args) => {
		return args.newUser
	}
}

*/
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
		createUser(newUserData: CreateUserInput): User
	}

	schema {
		query: RootQuery
		mutation: RootMutation
	}
`);
