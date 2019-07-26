import {
	GraphQLObjectType,
	GraphQLNonNull,
	GraphQLString,
	GraphQLID,
	GraphQLList
} from 'graphql';

export interface CreateAdminInput {
	name: string;
	email: string;
	password: string;
}

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

// GraphQl Error Type
export const ErrorType = new GraphQLNonNull(
	new GraphQLList(
		new GraphQLObjectType({
			name: 'ErrorType',
			description: 'Error Type of createAdmin mutation',
			fields: () => ({
				key: {
					type: new GraphQLNonNull(GraphQLString),
					description: 'Key of the error'
				},
				message: {
					type: new GraphQLNonNull(GraphQLString),
					description: 'Message of the error'
				}
			})
		})
	)
);

// GraphQl CreateAdminResult type
export const CreateAdminResult = new GraphQLObjectType({
	name: 'CreateAdminResult',
	fields: {
		admin: { type: AdminType, description: 'The Admin' },
		errors: { type: ErrorType, description: 'Admin errors' }
	}
});
