import { buildSchema } from 'graphql';

export default buildSchema(`
	type User {
		name: String!
		age: Int!
		email: String
	}

	input UserInput {
		name: String!
		age: Int!
		email: String
	}

  type RootQuery {
		str: String!	
		user: User!
	}

	type RootMutation {
		changeStr(newStr: String): String
		changeUserData(newUser: UserInput): User
	}

	schema {
		query: RootQuery
		mutation: RootMutation
	}
`);
