import conn from '../connections/mysql';

export const getProducts = async () => {
	const [products] = await conn.query('SELECT * FROM Products');

	return products;
};

interface inserProductParams {
	name: string;
	category: string;
	size: string;
}

export const addProduct = async ({
	name,
	category,
	size
}: inserProductParams) => {
	console.log(name, category, size);
	const [productCreatedResponse] = await conn.execute(
		'INSERT INTO Products(name, category, size) VALUES (?, ?, ?)',
		[name, category, size]
	);

	console.log(productCreatedResponse);

	const [newProduct] = await conn.query(
		'SELECT * FROM Products WHERE name = ? AND category = ? AND size = ?',
		[name, category, size]
	);

	return newProduct;
};
