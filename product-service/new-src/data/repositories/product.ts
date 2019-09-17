import conn from '../connections/mysql';

export const getProducts = async () => {
	const [products] = await conn.query('SELECT * FROM Products');

	return products;
};

export const addProduct = async () => {
	const [newProduct] = await conn.query(
		'INSERT INTO Products(name, category, size) VALUES ?',
		[[['Produto teste'], ['Camisa'], ['M']]]
	);

	console.log(newProduct);
	return newProduct;
};
