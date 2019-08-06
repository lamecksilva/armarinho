import express, { Response, Request } from 'express';
import jwt from 'jsonwebtoken';
import { request } from 'graphql-request';

import jwtSign from './src/utils/jwt-sign';

const app = express();

app.use(express.json());

app.get('/', (_, res: Response) => res.send('Hello from AUTH-service'));

// Login route
app.post('/auth/login', async (req: Request, res: Response) => {
	console.log(req.body);

	const query = `query ($email: String!, $password: String!) {
			login(email: $email, password: $password) {
				token,
				errors {
					key
					message
				}
			}
		}`;

	let token;

	await request('http://localhost:9002/graphql', query, req.body)
		.then(data => (token = data.login.token))
		.catch(err => res.status(400).json(err));

	const tokenType = 'Bearer';
	const refreshExpiresIn = '7h';
	const expiresIn = '1h';

	const refreshToken = await jwtSign(
		{ provisoryItem: 'Provisory Value', provisoryItem2: 'Provisory Value 2' },
		'secret'
	);

	return res
		.status(200)
		.json({ tokenType, token, expiresIn, refreshToken, refreshExpiresIn });

	// await jwt.sign(
	// 	fakeUser,
	// 	'secret',
	// 	{ expiresIn: '3h' },
	// 	async (error, token) => {
	// 		if (error) {
	// 			res.status(400).json({
	// 				success: false,
	// 				error: { message: 'Erro na criação do Token' }
	// 			});
	// 		}

	// 		await jwt.sign(
	// 			{ userId: fakeUser._id, userName: fakeUser.name },
	// 			'secret2',
	// 			{ expiresIn },
	// 			(err, refreshToken) => {
	// 				if (err) {
	// 					res.status(400).json({
	// 						success: false,
	// 						error: { message: 'Erro na criação do Refresh Token' }
	// 					});
	// 				}

	// 				console.dir({ tokenType, token, expiresIn, refreshToken });

	// 				return res
	// 					.status(200)
	// 					.json({ tokenType, token, expiresIn, refreshToken });
	// 			}
	// 		);
	// 	}
	// );
});

// Route to test Authorization http header
app.get('/protected', async (req: Request, res: Response) => {
	const token: string = req.headers.authorization || 'noToken';

	await jwt.verify(token, 'secret', (error, data) => {
		if (error) {
			return res
				.status(401)
				.json({ success: false, error: { message: 'JWT Token inválido' } });
		}

		return res.status(200).json({ success: true, data });
	});
});

const PORT = process.env.PORT || 9001;

app.listen(PORT, () => console.log(`Auth-Service running on port: ${PORT}`));
