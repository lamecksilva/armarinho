import { GraphQLObjectType, GraphQLSchema } from 'graphql';

import UserMutations from './users/mutations';
import UserQueries from './users/queries';

export default new GraphQLSchema({
	mutation: new GraphQLObjectType({
		fields: {
			...UserMutations
		},
		name: 'Mutation'
	}),
	query: new GraphQLObjectType({
		fields: {
			...UserQueries
		},
		name: 'Query'
	})
});
