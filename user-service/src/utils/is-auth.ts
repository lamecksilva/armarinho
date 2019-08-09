import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';

export default (req: Request, res: Response, next: NextFunction) => {
	const authHeader = req.get('Authorization');

	if (!authHeader) {
		res
			.status(401)
			.json({ success: false, message: 'Authorization header não encontrado' });
		req.isAuth = false;
		return next();
	}

	const token = authHeader.split(' ')[1];

	if (!token || token === '') {
		res
			.status(401)
			.json({ success: false, message: 'Token inexistente no header' });

		req.isAuth = false;
		return next();
	}

	let decoded;
	try {
		decoded = jwt.verify(token, process.env.SECRET_OR_KEY || 'secret');
	} catch (err) {
		res
			.status(401)
			.json({ success: false, message: 'Erro na verificação do token' });

		req.isAuth = false;
		return next();
	}

	if (!decoded) {
		res
			.status(401)
			.json({ success: false, message: 'Dados não encontrados no JWT Token' });

		req.isAuth = false;
		return next();
	}

	req.isAuth = true;
	next();
};
