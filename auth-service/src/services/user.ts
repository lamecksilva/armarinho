import { hash } from 'bcrypt';

import { UserRepository } from '../data/repositores';
import { User } from '../domains';

export class UserService {
	private readonly repository: UserRepository;

	constructor(repository: UserRepository) {
		this.repository = repository;
	}

	async getUsers() {
		const users = await this.repository.getUsers();

		return users;
	}

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
}
