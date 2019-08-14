export interface ErrorObject {
	[key: string]: string;
}

export interface ValidationResponse {
	isValid: boolean;
	errors: ErrorObject;
}

export interface SaveUserType {
	name: string;
	email: string;
	password: string;
}
