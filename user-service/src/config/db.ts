import mongoose from 'mongoose';

// Function to connect app to MongoDB
export default (): void => {
	const MONGO_URL =
		process.env.MONGO_URL ||
		'mongodb://localhost:27017/armarinho-user-service-db';

	if (!MONGO_URL) {
		throw new Error('MONGO_URL não declarada');
	}

	mongoose.connect(MONGO_URL, { useNewUrlParser: true });
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
		mongoose.connect(MONGO_URL, { server: { auto_reconnect: true } });
	});

	db.on('reconnected', () => {
		console.info('MongoDB Reconectado!');
	});
};
