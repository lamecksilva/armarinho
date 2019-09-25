import { Collection, Db } from 'mongodb';

import { User, UserType } from '../../domains/user/User';

export class UserRepository {
	private readonly _collection: Collection;

	// Constructor for this repository
	constructor(connection: Db) {
		console.info('User Repository Constructor');
		this._collection = connection.collection(User.collection);
	}

	// async getUsers(): Promise<Array<UserType>> {
	// 	return this._collection.find({});
	// }

	async getUsers(): Promise<Array<UserType>> {
		return this._collection.find({}).toArray();
	}
}
