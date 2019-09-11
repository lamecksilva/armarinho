type User = {
	_id: string;
	userType: string;
	name: string;
	email: string;
	createdAt: string;
	updatedAt: string;
};

type NewUserInput = {
	name: string;
	email: string;
	password: string;
	password2: string;
};
