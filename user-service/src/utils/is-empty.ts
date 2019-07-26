// Módulo para checar se o dado é vazio ou não
export default (value: any): boolean =>
	value === undefined ||
	value === null ||
	(typeof value === 'object' && Object.keys(value).length === 0) ||
	(typeof value === 'string' && value.trim().length === 0);
