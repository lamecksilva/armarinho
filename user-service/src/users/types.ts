export interface ErrorType {
	key: string;
	message: string;
}

export interface ValidationResponse {
	isValid: boolean;
	errors: Array<ErrorType>;
}

export interface SaveUserType {
	name: string;
	email: string;
	password: string;
}
