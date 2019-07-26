import {
	GraphQLID,
	GraphQLNonNull,
	GraphQLString,
} from 'graphql';
import resolvers from './resolvers';
import { UserType, CreateUserResult } from './types';

export default {
	// Crate and save a new user
	createUser: {
		type: CreateUserResult,
		args: {
			name: {
				description: "The users's name.",
				type: new GraphQLNonNull(GraphQLID)
			},
			email: {
				description: "The users's email.",
				type: new GraphQLNonNull(GraphQLString)
			},
			password: {
				description: "The users's account password",
				type: new GraphQLNonNull(GraphQLString)
			}
		},
		resolve: resolvers.createUser
	},

	// Delete a user from database
	deleteUser: {
		args: {
			id: {
				description: "The user's id.",
				type: new GraphQLNonNull(GraphQLID)
			}
		},
		resolve: resolvers.deleteUser,
		type: UserType
	}
};
