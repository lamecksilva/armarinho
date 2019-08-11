import { GraphQLID, GraphQLNonNull, GraphQLList, GraphQLString } from 'graphql';

import { UserType, LoginUserResult } from './types';
import resolvers from './resolvers';

export default {
	// Users query
	users: {
		type: new GraphQLNonNull(new GraphQLList(UserType)),
		description: 'Users list',
		args: {
			id: {
				description: "User's id to search",
				type: GraphQLID
			},
			email: {
				description: "User's email to find",
				type: GraphQLString
			}
		},
		resolve: resolvers.users
	},
	// login = Generate jwt token of the user
	login: {
		type: LoginUserResult,
		description: 'JWT Token of the user',
		args: {
			email: {
				description: "User's email to log in",
				type: new GraphQLNonNull(GraphQLString)
			},
			password: {
				description: 'Password of the user',
				type: new GraphQLNonNull(GraphQLString)
			}
		},
		resolve: resolvers.loginUser
	}
};
