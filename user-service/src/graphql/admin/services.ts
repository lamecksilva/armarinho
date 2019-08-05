import Admin from './model';
import { CreateAdminInput } from './types';

// Return all admins
export const getAdmins = async (props: any) => {
	try {
		let admins;

		props.id !== undefined
			? (admins = await Admin.find({ _id: props.id }))
			: (admins = await Admin.find({}));

		return admins.map(admin => {
			return { ...admin._doc, password: null };
		});
	} catch (e) {
		throw new Error(e);
	}
};

// Create a new Admin
export const saveAdmin = async ({
	name,
	email,
	password
}: CreateAdminInput) => {
	try {
		const newAdmin = await new Admin({ name, email, password });

		const result = await newAdmin.save();

		return {
			...result._doc,
			password: null
		};
	} catch (e) {
		throw new Error(e);
	}
};
