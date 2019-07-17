import mongoose from 'mongoose';

export default (): void => {
	const MONGO_URL =
		process.env.MONGO_URL || 'mongo://localhost:27017/armarinho';

	if (!process.env.MONGO_URL) {
		throw new Error('MONGO_URL não declarada');
	}

	mongoose.connect(MONGO_URL);
	const db = mongoose.connection;

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
