import jwt from 'jsonwebtoken';

export default (token: string, secret: string) =>
	new Promise((resolve, reject) => {
		jwt.verify(token, secret, (err, isValid) => {
			if (err) {
				reject(err);
			} else {
				resolve(isValid);
			}
		});
	});
