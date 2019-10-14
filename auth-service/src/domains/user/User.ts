import { ObjectID } from 'mongodb';

export interface UserType {
	id?: ObjectID;
	name: string;
	email: string;
	userType: string;
	password: string;
	createdAt?: Date;
	updatedAt?: Date;
}

export class User {
	public static readonly collection: string = 'users';

	name: string;
	email: string;
	userType: string;
	password: string;

	constructor(user: UserType) {
		this.name = user.name;
		this.email = user.email;
		this.userType = user.userType !== undefined ? user.userType : 'user';
		this.password = user.password;
	}
}
