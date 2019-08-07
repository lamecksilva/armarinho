require('dotenv').config();

import express, { Response, Request } from 'express';
// import jwt from 'jsonwebtoken';
import { request } from 'graphql-request';

import jwtSign from './src/utils/jwt-sign';
import jwtVerify from './src/utils/jwt-verify';

const app = express();

app.use(express.json());

/**
 *
 * Test Route
 *
 */
app.get('/', (_, res: Response) => res.send('Hello from AUTH-service'));

/**
 *
 *  Login route
 *
 */
app.post('/login', async (req: Request, res: Response) => {
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

	let { errors, token } = data.login;

	if (errors.length) {
		return res.status(400).json({ errors });
	}

	const refreshToken = await jwtSign(
		{ provisoryItem: 'Provisory Value', provisoryItem2: 'Provisory Value 2' },
		'secret'
	);

	return res.status(200).json({
		tokenType: 'Bearer',
		token,
		expiresIn: '1h',
		refreshToken,
		refreshExpiresIn: '7h'
	});
});

/**
 *
 * Route to test Authorization http header
 *
 */
app.get('/protected', async (req: Request, res: Response) => {
	const token: string = req.headers.authorization || 'noToken';

	// Verify jwt token
	await jwtVerify(token, 'secret')
		.then(isValid => {
			return res.status(200).json({ success: isValid, message: 'JWT Válido' });
		})
		.catch(err => {
			return res.status(401).json({
				success: err != undefined,
				error: { message: 'JWT Token inválido' }
			});
		});

	// If returns before verify
	return res.status(102).json({ success: true });
});

/**
 *
 * Route to refresh token
 *
 */
app.post('/refresh-token', async (req: Request, res: Response) => {
	// 1 -> Check if refreshToken is valid
	// 2 -> Generate an new AcessToken
	// 3 -> Generate an new RefreshToken
	// 4 -> Return new tokens
	console.log(req.body);

	return res.status(200);
});

const PORT = process.env.PORT || 9001;

app.listen(PORT, () => console.log(`Auth-Service running on port: ${PORT}`));
