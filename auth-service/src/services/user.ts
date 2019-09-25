import { UserRepository } from '../data/repositores/user';
// import { UserType} from "../domains/index"

export class UserService {
	private readonly repository: UserRepository;

	constructor(repository: UserRepository) {
		this.repository = repository;
	}

	async getUsers() {
		const users = await this.repository.getUsers();

		return users;
	}
}
