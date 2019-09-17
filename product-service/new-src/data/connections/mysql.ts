import { createPool } from 'mysql2';

const promisePool = createPool({
	host: 'localhost',
	user: 'lameck',
	password: 'GUERRAcivil',
	database: 'ArmarinhoProductsDB'
});

const connection = promisePool.promise();

const result = async function() {
	const [result] = await connection.query('SELECT 1 + 1 AS result');

	return result;
};

if (result) {
	console.log('MYSQL CONNECTED!');
}

export default connection;
