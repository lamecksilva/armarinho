import { MongoClient, Db, MongoClientOptions } from 'mongodb';

const defaults: MongoClientOptions = {
	poolSize: 10,
	useNewUrlParser: true,
	useUnifiedTopology: true,
	autoReconnect: true
};

interface mongoConnectionType {
	uri: string;
	dbName: string;
	options?: object;
}

const connect = async (config: mongoConnectionType) => {
	const client = await MongoClient.connect(`${config.uri}/${config.dbName}`, {
		...defaults,
		...config.options
	});

	if (client) {
		console.log('MongoDB Connected!!');
	}

	return client.db(config.dbName);
};

/**
 * createMongoDBConnection
 *
 * Connect with mongo database
 *
 * @param {mongoConnectionType} config
 */
const createMongoDBConnection = async (
	config: mongoConnectionType
): Promise<Db> => {
	return connect(config);
};

export { createMongoDBConnection };
