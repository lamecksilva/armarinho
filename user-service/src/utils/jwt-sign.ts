import jwt from 'jsonwebtoken';

export default (data: object, secret: string, options: object) =>
	new Promise((resolve, reject) => {
		jwt.sign(data, secret, options, (err, token) => {
			if (err) {
				reject(err);
			} else {
				resolve(token);
			}
		});
	});
