import mongoose, { Schema, Document } from 'mongoose';

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
	name: String;
	email: String;
	password: String;
}

export default mongoose.model<User>('User', UserSchema);
