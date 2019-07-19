import { GraphQLID, GraphQLNonNull, GraphQLList } from 'graphql';
import resolvers from './resolvers';
import User from './type';

export default {
	users: {
		args: {
			id: {
				description: "User's id to search",
				type: GraphQLID
			}
		},
		resolve: resolvers.users,
		type: new GraphQLNonNull(new GraphQLList(User))
	}
};
