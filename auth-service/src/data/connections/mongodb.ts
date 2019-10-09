import { MongoClient, Db } from 'mongodb';

const defaults = {
	poolSize: 10,
	useNewUrlParser: true,
	useUnifiedTopology: true
};

interface mongoConnectionType {
	uri: string;
	dbName: string;
	options?: object;
}

const connect = async (config: mongoConnectionType) => {
	const client = await MongoClient.connect(config.uri, {
		...defaults,
		...config.options
	});

	if (client) {
		console.log('MongoDB Connected!!');
	}

	return client.db(config.dbName);
};

const createConnection = async (config: mongoConnectionType): Promise<Db> => {
	return connect(config);
};

export { createConnection };