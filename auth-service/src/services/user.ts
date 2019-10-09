import { hash } from 'bcrypt';

import { UserRepository } from '../data/repositores';
import { User } from '../domains';

export class UserService {
	private readonly repository: UserRepository;

	constructor(repository: UserRepository) {
		this.repository = repository;
	}

	/**
	 * Return all users
	 */
	async getUsers() {
		const users = await this.repository.getUsers();

		return users;
	}

	/**
	 * saveUser
	 *
	 * save a user in DB
	 *
	 * @param {User} user
	 *
	 */
	async saveUser(user: User) {
		if (await this.repository.findUserByEmail(user.email)) {
			return { user: {}, errors: { email: 'Email já cadastrado' } };
		}

		user.password = await hash(user.password, 10);

		const { ops } = await this.repository.saveUser(user);

		return {
			user: { ...ops[0], password: null },
			errors: {}
		};
	}

	/**
	 * updateUser
	 *
	 * Update a user by id
	 *
	 * @param id
	 * @param data
	 */
	async updateUser(id: string, data: any) {
		if (await this.repository.findUserById(id)) {
			return {
				user: {},
				errors: { id: 'Nenhum usuário encontrado para este ID' }
			};
		}
		console.log(await this.repository.findUserById(id));

		const result = await this.repository.findUserByIdAndUpdate(id, data);

		console.log(await this.repository.findUserById(id));
		return {
			user: { ...result },
			errors: {}
		};
	}
}
