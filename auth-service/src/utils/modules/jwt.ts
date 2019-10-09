import jwt, { SignOptions } from 'jsonwebtoken';

/**
 * jwtVerifyAsync
 *
 * Verify if token is valid
 *
 * @param token Token to be verified
 * @param secret Secret jwt key of application
 */
export function jwtVerifyAsync(token: string, secret: string): Promise<any> {
	return new Promise((resolve, reject) => {
		jwt.verify(token, secret, (err, isValid) => {
			if (err) {
				reject(err);
			} else {
				resolve(isValid);
			}
		});
	});
}

/**
 * jwtSignAsync
 *
 * Sign a object into jwt token
 *
 * @param data Data to be inserted in jwt payload
 * @param secret Secret jwt key of application
 * @param options Extra options
 */
export function jwtSignAsync(
	data: object,
	secret: string,
	options?: SignOptions
) {
	return new Promise((resolve, reject) => {
		jwt.sign(data, secret, { ...options }, (err, token) => {
			if (err) {
				reject(err);
			} else {
				resolve(token);
			}
		});
	});
}

/**
 * jwtDecodeAsync
 *
 * Decode a token
 *
 * @param token JWT token to be decoded
 */
export function jwtDecodeAsync(token: string) {
	return new Promise((resolve, reject) => {
		const extractedData = jwt.decode(token);

		if (!extractedData) {
			reject(new Error('Error in JWT Decode'));
		} else {
			resolve(extractedData);
		}
	});
}
