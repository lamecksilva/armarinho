import {
	buildSchema
	// GraphQLSchema,
	// GraphQLObjectType,
	// GraphQLID,
	// GraphQLString,
	// GraphQLNonNull
} from 'graphql';

// import { users } from '../resolvers';
// import { UserQuery } from '../../types/user';

// Build the GraphQL Schema
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
		users(id: String): [User!]!
	}

	type RootMutation {
		createUser(newUserData: CreateUserInput): User
	}

	schema {
		query: RootQuery
		mutation: RootMutation
	}
`);

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

// Defines the user type
/*
const userType = new GraphQLObjectType({
	name: 'userType',
	fields: {
		_id: { type: new GraphQLNonNull(GraphQLID) },
		name: { type: new GraphQLNonNull(GraphQLString) },
		email: { type: new GraphQLNonNull(GraphQLString) }
	}
});

// Define the Query type
const RootQuery = new GraphQLObjectType({
	name: 'Query',
	fields: {
		user: {
			type: userType,
			// `args` describes the arguments that the `user` query accepts
			args: {
				id: { type: GraphQLID }
			},
			resolve: (_, args) => {
				console.log(args);
				return users(args);
			}
		}
	}
});

export default new GraphQLSchema({
	query: RootQuery
	// mutation: RootMutation
});

*/