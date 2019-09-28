import { Collection, Db } from 'mongodb';

import { User, UserType } from '../../domains/user/User';

export class UserRepository {
	private readonly _collection: Collection;

	// Constructor for this repository
	constructor(connection: Db) {
		console.info('User Repository Constructor');
		this._collection = connection.collection(User.collection);
	}

	// Find all users in DB
	async getUsers(): Promise<Array<UserType>> {
		return await this._collection
			.find({}, { projection: { password: 0 } })
			.toArray();
	}

	// Find user by email
	async findUserByEmail(email: string) {
		return await this._collection.findOne({ email });
	}

	// Save user
	async saveUser(user: User) {
		return await this._collection.insertOne(user);
	}
}
