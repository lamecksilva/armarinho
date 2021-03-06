import mongoose from 'mongoose';

// Function to connect app to MongoDB
export default (): void => {
	const MONGO_URL =
		process.env.MONGO_URL ||
		'mongodb://admin:adminPassword@localhost:27017/ArmarinhoAuthDB?authSource=admin';

	if (!MONGO_URL) {
		throw new Error('MONGO_URL não declarada');
	}

	mongoose.connect(MONGO_URL, {
		useNewUrlParser: true,
		useFindAndModify: false
	});

	const db = mongoose.connection;

	// Handling events
	db.on('error', err => {
		console.error('Erro na conexão com o MongoDB: ');
		throw new Error(err);
	});

	db.once('open', () => {
		console.info('MongoDB conectado com sucesso!');
	});

	db.on('disconnected', () => {
		console.error('MongoDB desconectado');
		mongoose.connect(MONGO_URL);
	});

	db.on('reconnected', () => {
		console.info('MongoDB Reconectado!');
	});
};
