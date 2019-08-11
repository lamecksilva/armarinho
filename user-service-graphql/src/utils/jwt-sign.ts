import jwt, { SignOptions } from 'jsonwebtoken';

export default (data: object, secret: string, options: SignOptions) =>
	new Promise((resolve, reject) => {
		jwt.sign(data, secret, { ...options }, (err, token) => {
			if (err) {
				reject(err);
			} else {
				resolve(token);
			}
		});
	});
