import { GraphQLID, GraphQLNonNull, GraphQLList } from 'graphql';
import resolvers from './resolvers';
import { UserType } from './types';

export default {
	// Users query
	users: {
		type: new GraphQLNonNull(new GraphQLList(UserType)),
		description: 'Users list',
		args: {
			id: {
				description: "User's id to search",
				type: GraphQLID
			}
		},
		resolve: resolvers.users
	}
};
