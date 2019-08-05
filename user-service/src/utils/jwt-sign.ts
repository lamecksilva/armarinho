import jwt from 'jsonwebtoken';

export default (data: object, secret: string) =>
	new Promise((resolve, reject) => {
		jwt.sign(data, secret, (err, token) => {
			if (err) {
				reject(err);
			} else {
				resolve(token);
			}
		});
	});
