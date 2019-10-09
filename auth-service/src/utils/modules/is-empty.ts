// Módulo para checar se o dado é vazio ou não
export function isEmpty(value: any): boolean {
	return (
		value === undefined ||
		value === null ||
		(typeof value === 'object' && Object.keys(value).length === 0) ||
		(typeof value === 'string' && value.trim().length === 0)
	);
}
