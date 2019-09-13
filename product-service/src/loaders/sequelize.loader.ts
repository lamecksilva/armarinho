import { Sequelize } from 'sequelize';

const sequelizeLoader = async () => {
	const sequelize = new Sequelize({
		host: 'localhost',
		port: 3306,
		database: 'armarinho_products_DB',
		username: 'lameck',
		password: 'GUERRAcivil',
		dialect: 'mysql',
		pool: {
			max: 5,
			min: 0,
			acquire: 30000,
			idle: 10000
		}
	});

	return sequelize;
};

export default sequelizeLoader;
