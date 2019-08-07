import jwt from 'jsonwebtoken';

export default (token: string): object =>
	new Promise((resolve, reject) => {
		const extractedData = jwt.decode(token);

		if (!extractedData) {
			reject(new Error('Error in JWT Decode'));
		} else {
			resolve(extractedData);
		}
	});
