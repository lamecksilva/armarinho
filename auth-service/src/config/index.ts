export const mongoUrl =
	process.env.MONGO_URL ||
	'mongodb://admin:adminPassword@localhost:27017/ArmarinhoAuthDB?authSource=admin';
export const databaseName = process.env.MONGO_DB_NAME || 'ArmarinhoAuthDB';
export const secretOrKey = process.env.SECRET_OR_KEY || 'secretOrKey';
