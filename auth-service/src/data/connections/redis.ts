import { createClient, RedisClient } from 'redis';

/**
 * createRedisConnection
 *
 * Create a connection with redis
 */
export const createRedisConnection = (): RedisClient => {
	const conn = createClient();

	if (conn) {
		console.log('Redis Connected');
	}

	return conn;
};
