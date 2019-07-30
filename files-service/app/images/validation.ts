import isEmpty from '../../utils/is-empty';

export const validateImageInput = (mimetype: string) => {
	const errors: any = {};

	if (isEmpty(mimetype)) {
		errors.image = 'O campo imagem não pode ser vazio';
	} else {
		mimetype = mimetype.split('/')[1];

		if (!['jpg', 'jpeg', 'png'].includes(mimetype)) {
			errors.image = 'Formato de imagem inválido';
		}
	}

	return {
		isValid: isEmpty(errors),
		errors
	};
};
