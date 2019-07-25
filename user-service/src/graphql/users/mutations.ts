import { GraphQLID, GraphQLNonNull, GraphQLString } from 'graphql';
import resolvers from './resolvers';
import User from './type';

export default {
	// Crate and save a new user
	createUser: {
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
		resolve: resolvers.createUser,
		type: User
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
		type: User
	}
};
