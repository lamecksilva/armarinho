import mongoose, { Schema, Document } from 'mongoose';

// User Schema
const UserSchema: Schema = new Schema(
	{
		name: {
			type: String,
			required: true
		},
		email: {
			type: String,
			required: true
		},
		password: {
			type: String,
			required: true
		}
	},
	{
		timestamps: true
	}
);

interface User extends Document {
	name: string;
	email: string;
	password: string;
	_doc?: object;
}

export default mongoose.model<User>('User', UserSchema);
