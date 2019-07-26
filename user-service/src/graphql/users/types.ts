import {
	GraphQLNonNull,
	GraphQLList,
	GraphQLObjectType,
	GraphQLString,
	GraphQLID
} from 'graphql';

// interfaces
export interface CreateUserInput {
	name: string;
	email: string;
	password: string;
}

// GraphQl User type
export const UserType = new GraphQLObjectType({
	name: 'User',
	description: 'A User',
	fields: {
		_id: {
			description: "User's ID",
			type: new GraphQLNonNull(GraphQLID)
		},
		email: {
			description: "The user's email",
			type: new GraphQLNonNull(GraphQLString)
		},
		name: {
			description: "The user's name",
			type: new GraphQLNonNull(GraphQLString)
		}
	}
});

// GraphQl Error Type
export const ErrorType = new GraphQLNonNull(
	new GraphQLList(
		new GraphQLObjectType({
			name: 'ErrorType',
			description: 'Error Type of createUser mutation',
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

// GraphQl CreateUserResult type
export const CreateUserResult = new GraphQLObjectType({
	name: 'CreateUserResult',
	fields: {
		user: { type: UserType, description: 'The user' },
		errors: { type: ErrorType, description: 'User errors' }
	}
});
