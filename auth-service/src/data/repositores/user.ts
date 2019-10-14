import { Collection, Db, ObjectId } from 'mongodb';

import { User, UserType } from '../../domains/user/User';

export class UserRepository {
	private readonly _collection: Collection;

	/**
	 * Constructor Class UserRepository
	 *
	 * @param connection Connection with mongodb
	 */
	constructor(connection: Db) {
		console.info('User Repository Constructor');
		this._collection = connection.collection(User.collection);
	}

	/**
	 * getUsers
	 *
	 * Find all users in DB
	 */
	async getUsers(): Promise<Array<UserType>> {
		return await this._collection
			.find({}, { projection: { password: 0 } })
			.toArray();
	}

	/**
	 * findUserByEmail
	 *
	 * FInd a user in DB by email
	 *
	 * @param email
	 */
	async findUserByEmail(email: string) {
		return await this._collection.findOne({ email });
	}

	/**
	 * saveUser
	 *
	 * Save a user in DB
	 *
	 * @param user
	 */
	async saveUser(user: User) {
		return await this._collection.insertOne({
			...user,
			createdAt: new Date(),
			updatedAt: new Date()
		});
	}

	/**
	 * findUserById
	 *
	 * @param id
	 */
	async findUserById(id: string) {
		return await this._collection.findOne({ _id: new ObjectId(id) });
	}

	/**
	 * findUserByIdAndUpdate
	 *
	 * @param id
	 * @param data
	 */
	async findUserByIdAndUpdate(id: string, data: any) {
		return await this._collection.findOneAndUpdate(
			{ _id: new ObjectId(id) },
			{ $set: { ...data } },
			{ projection: { password: 0 } }
		);
	}
}
