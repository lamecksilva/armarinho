import { GraphQLID, GraphQLNonNull, GraphQLString } from 'graphql';

import { UserType, CreateUserResult, EditUserResult } from './types';
import resolvers from './resolvers';

export default {
	// Crate and save a new user
	createUser: {
		type: CreateUserResult,
		args: {
			name: {
				description: "The users's name.",
				type: new GraphQLNonNull(GraphQLString)
			},
			email: {
				description: "The users's email.",
				type: new GraphQLNonNull(GraphQLString)
			},
			password: {
				description: "The user's account password",
				type: new GraphQLNonNull(GraphQLString)
			},
			password2: {
				description: 'Confirm password',
				type: new GraphQLNonNull(GraphQLString)
			}
		},
		resolve: resolvers.createUser
	},

	// Edit a user from database
	editUser: {
		type: EditUserResult,
		args: {
			id: {
				description: "The user's ID",
				type: new GraphQLNonNull(GraphQLString)
			},
			name: {
				description: "The user's name.",
				type: GraphQLString
			},
			email: {
				description: "The users's email.",
				type: GraphQLString
			}
		},
		resolve: resolvers.editUser
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
