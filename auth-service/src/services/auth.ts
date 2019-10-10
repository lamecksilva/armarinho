import { compare } from 'bcrypt';

import { UserRepository } from '../data/repositores';
import { jwtSignAsync } from '../utils';
import { secretOrKey } from '../config';

export class AuthService {
	private readonly userRepository: UserRepository;

	/**
	 * Class AuthService
	 *
	 * @param userRepository
	 */
	constructor(userRepository: UserRepository) {
		this.userRepository = userRepository;
	}

	/**
	 * loginUser
	 *
	 * @param userCredentials
	 */
	async loginUser(userCredentials: { email: string; password: string }) {
		const user = await this.userRepository.findUserByEmail(
			userCredentials.email
		);

		if (!user) {
			return {
				token: null,
				errors: { email: 'Nenhuma conta encontrada para este email' }
			};
		}

		const isPasswordValid = await compare(
			userCredentials.password,
			user.password
		);

		if (!isPasswordValid) {
			return {
				token: null,
				errors: {
					password: 'Senha incorreta'
				}
			};
		}

		const payload = {
			id: user._id,
			name: user.name,
			userType: user.userType,
			createdAt: user.createdAt,
			updatedAt: user.updatedAt
		};

		const token = await jwtSignAsync(payload, secretOrKey, { expiresIn: 3600 });

		return { token, errors: {} };
	}
}
