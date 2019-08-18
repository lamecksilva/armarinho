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
		userType: {
			type: String,
			enum: ['user', 'admin'],
			default: 'user'
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
	userType: string;
	password: string;
	_doc?: object;
}

export default mongoose.model<User>('User', UserSchema);
