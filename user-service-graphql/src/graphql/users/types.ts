import {
	GraphQLNonNull,
	GraphQLList,
	GraphQLObjectType,
	GraphQLString,
	GraphQLID
} from 'graphql';

import { GraphQLDate, GraphQLDateTime } from 'graphql-iso-date';

// interfaces
export interface CreateUserInput {
	name: string;
	email: string;
	password: string;
	password2: string;
}

export interface EditUserInput {
	id: string;
	name: string;
	email: string;
}

export interface ErrorType {
	key: string;
	message: string;
}

export interface ValidationResponse {
	isValid: boolean;
	errors: Array<ErrorType>;
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
		},
		createdAt: {
			description: "Date of 'birth'",
			type: new GraphQLNonNull(GraphQLDate)
		},
		updatedAt: {
			description: 'Date of Update',
			type: new GraphQLNonNull(GraphQLDateTime)
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

// EditUserResult type
export const EditUserResult = new GraphQLObjectType({
	name: 'EditUserResult',
	fields: {
		user: {
			type: UserType,
			description: 'The updated user'
		},
		errors: {
			type: ErrorType,
			description: 'Errors message'
		}
	}
});
