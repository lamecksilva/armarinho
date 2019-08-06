import express, { Response, Request } from 'express';
import jwt from 'jsonwebtoken';
import { request } from 'graphql-request';

const app = express();

app.use(express.json());

app.get('/', (_, res: Response) => res.send('Hello from AUTH-service'));

// const fakeUser = {
// 	_id: '5d33252b33afcf536e756dc5',
// 	name: 'Lameco',
// 	email: 'lameck.santos@lsdev.com',
// 	// password: '12iyu3gf12yiu3f123iy12rf3iy1u23f12yi3f12iy3r12yil12i12yuf312yi',
// 	createdAt: '2019-07-20T14:28:59.807Z',
// 	updatedAt: '2019-07-20T14:28:59.807Z'
// };

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

	await request('http://localhost:9002/graphql', query, req.body)
		.then(data => res.status(200).json(data.login))
		.catch(err => res.status(400).json(err));

	// const tokenType = 'Bearer';
	// const expiresIn = '7h';

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
