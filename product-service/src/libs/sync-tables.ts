import conn from '../data/connections/mysql';

export const syncTables = async () => {
	const [createProductsTableResult] = await conn.query(`
		CREATE TABLE IF NOT EXISTS Products (
			id INT AUTO_INCREMENT ,
			name VARCHAR(75) NOT NULL,
			category ENUM('Camisa', 'Calça', 'Bermuda', 'Saia', 'Vestido', 'Short') NOT NULL,
			size ENUM('PP', 'P', 'M', 'G', 'GG', 'XG') NOT NULL,
			createdAt TIMESTAMP DEFAULT NOW() NOT NULL,
			updatedAt TIMESTAMP DEFAULT NOW() ON UPDATE NOW() NOT NULL,
			PRIMARY KEY(id)
	)`);

	// console.log(createProductsTableResult);

	const [createImagensTableResult] = await conn.query(`
		CREATE TABLE IF NOT EXISTS Images (
			id INT AUTO_INCREMENT,
			productId INT NOT NULL,
			url VARCHAR(150) NOT NULL,
			createdAt TIMESTAMP DEFAULT NOW() NOT NULL,
			updatedAt TIMESTAMP NOT NULL DEFAULT NOW() ON UPDATE NOW(),
			PRIMARY KEY(id),
			CONSTRAINT productId 
			FOREIGN KEY(productId)
				REFERENCES Products(id)
				ON DELETE CASCADE
	)`);

	console.log(createImagensTableResult);
};
