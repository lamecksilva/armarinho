import isEmpty from '../utils/is-empty';
import { Request, Response, NextFunction } from 'express';

export const validateImageInput = (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	const errors: any = {};

	if (isEmpty(req.file)) {
		errors.image = 'O campo imagem não pode ser vazio';

		return res.status(400).json({ success: false, errors });
	} else {
		let mimetype = req.file.mimetype.split('/')[1];

		if (!['jpg', 'jpeg', 'png'].includes(mimetype)) {
			errors.image = 'Formato de imagem inválido';

			return res.status(400).json({ success: false, errors });
		}
	}

	return next();
};
