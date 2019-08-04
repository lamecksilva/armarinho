import express, { Response, Request } from 'express';
import jwt from 'jsonwebtoken';

const app = express();

app.get('/', (_, res: Response) => res.send('Hello from AUTH-service'));

const fakeUser = {
	_id: '5d33252b33afcf536e756dc5',
	name: 'Lameco',
	email: 'lameck.santos@lsdev.com',
	// password: '12iyu3gf12yiu3f123iy12rf3iy1u23f12yi3f12iy3r12yil12i12yuf312yi',
	createdAt: '2019-07-20T14:28:59.807Z',
	updatedAt: '2019-07-20T14:28:59.807Z'
};

app.post('/auth/login', async (req: Request, res: Response) => {
	console.log(req.body);

	try {
		const tokenType = 'Bearer';
		const expiresIn = '7h';
		const token = await jwt.sign(fakeUser, 'secret', { expiresIn: '3h' });

		const refreshToken = await jwt.sign(
			{ userId: fakeUser._id, userName: fakeUser.name },
			'secret2',
			{ expiresIn }
		);

		console.log(
			`{ tokenType: ${tokenType}, token: ${token}, expiresIn: ${expiresIn}, refreshToken: ${refreshToken} }`
		);

		return res.status(200).json({ tokenType, token, expiresIn, refreshToken });
	} catch (e) {
		console.log(e);

		throw new Error(e);
	}
});

app.get('/protected', async (req: Request, res: Response) => {
	const token: string = req.headers.authorization || 'noToken';

	try {
		await jwt.verify(token, 'secret', (err, data) => {
			if (err) {
				return res.status(400).json({ success: false, err });

				throw err;
			}

			return res.status(200).json(data);
		});

		return res.json(200).json({ success: false });
	} catch (e) {
		console.log(e);

		throw new Error(e);
	}
});

const PORT = process.env.PORT || 9001;

app.listen(PORT, () => console.log(`Auth-Service running on port: ${PORT}`));
