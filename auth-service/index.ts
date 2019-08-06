require('dotenv').config();

import express, { Response, Request } from 'express';
// import jwt from 'jsonwebtoken';
import { request } from 'graphql-request';

import jwtSign from './src/utils/jwt-sign';
import jwtVerify from './src/utils/jwt-verify';

const app = express();

app.use(express.json());

// Test Route
app.get('/', (_, res: Response) => res.send('Hello from AUTH-service'));

// Login route
app.post('/auth/login', async (req: Request, res: Response) => {
	// GraphQL Query
	const query = `query ($email: String!, $password: String!) {
			login(email: $email, password: $password) {
				token,
				errors {
					key
					message
				}
			}
		}`;

	// GraphQL request to User Service
	const data = await request(
		process.env.USER_SERVICE_URL || 'http://localhost:9002/graphql',
		query,
		req.body
	);

	let { errors } = data.login;

	if (errors.length) {
		return res.status(400).json({ errors });
	}

	const { token } = data.login;
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
});

// Route to test Authorization http header
app.get('/protected', async (req: Request, res: Response) => {
	const token: string = req.headers.authorization || 'noToken';

	// Verify jwt token
	await jwtVerify(token, 'secret')
		.then(isValid => {
			console.log(isValid);

			return res.status(200).json({ success: true, message: 'JWT Válido' });
		})
		.catch(err => {
			console.error(err);

			return res
				.status(401)
				.json({ success: false, error: { message: 'JWT Token inválido' } });
		});

	return res.status(102).json({ success: true });
});

const PORT = process.env.PORT || 9001;

app.listen(PORT, () => console.log(`Auth-Service running on port: ${PORT}`));
