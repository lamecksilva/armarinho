require('dotenv').config();

import { start } from './presentation/server';

start();

process.on('unhandledRejection', (error: any) => {
	console.error('unhandledRejection: ' + error.message);
});
