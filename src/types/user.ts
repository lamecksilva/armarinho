// Type of the User
export interface User {
	_id: string;
	name: string;
	email: string;
	password: string;
}

export interface CreateUserInput {
	newUserData: {
		name: string;
		email: string;
		password: string;
	};
}
