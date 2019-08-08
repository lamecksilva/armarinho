import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';

export default (req: Request, res: Response, next: NextFunction) => {
	const authHeader = req.get('Authorization');

	if (!authHeader) {
		res
			.status(401)
			.json({ success: false, message: 'Authorization header não encontrado' });
		return next();
	}

	const token = authHeader.split(' ')[1];

	if (!token || token === '') {
		res
			.status(401)
			.json({ success: false, message: 'Token inexistente no header' });
		return next();
	}

	let decoded;
	try {
		decoded = jwt.verify(token, 'secret');
	} catch (err) {
		res
			.status(401)
			.json({ success: false, message: 'Erro na verificação do token' });

		return next();
	}

	if (!decoded) {
		res.status(401).json({ success: false, message: 'Sem dados no jwt token' });

		return next();
	}

	next();
};
