import {
	GraphQLObjectType,
	GraphQLNonNull,
	GraphQLString,
	GraphQLID
} from 'graphql';

export const AdminType = new GraphQLObjectType({
	name: 'AdminType',
	description: 'Admin of the Armarinho',
	fields: {
		_id: {
			description: 'ID of the Admin',
			type: new GraphQLNonNull(GraphQLID)
		},
		name: {
			description: 'The name of Admin',
			type: new GraphQLNonNull(GraphQLString)
		},
		email: {
			description: "Admin's Email Adress",
			type: new GraphQLNonNull(GraphQLString)
		}
	}
});
