import { createClient, RedisClient } from 'redis';

export const getConnection = (): RedisClient => {
	return createClient();
};
