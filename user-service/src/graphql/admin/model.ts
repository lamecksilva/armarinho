import mongoose, { Schema, Document } from 'mongoose';

// User Schema
const AdminSchema: Schema = new Schema(
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

interface Admin extends Document {
	name: String;
	email: String;
	password: String;
	_doc?: Object;
}

export default mongoose.model<Admin>('Admin', AdminSchema);