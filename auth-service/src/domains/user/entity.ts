export interface UserType {
	name: string;
	email: string;
	userType: string;
	password: string;
	createdAt?: Date;
	updatedAt?: Date;
}

export class UserClass {
	private user: UserType;

	constructor(user: UserType) {
		this.user = user;
	}

	getUser(): UserType {
		return this.user;
	}
}
