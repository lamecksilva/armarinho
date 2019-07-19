// Type of the User
export interface User {
	_id: string;
	name: string;
	email: string;
	password: string;
}

export interface CreateUserInput {
	name: string;
	email: string;
	password: string;
}

export interface UserQuery {
	id: string;
}
