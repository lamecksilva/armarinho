import * as React from 'react';
import { Typography } from '@material-ui/core';

interface ProductsProps {}

interface ProductsState {}

const Products: React.FC<ProductsProps> = () => {
	return (
		<div>
			<Typography variant="h4">Produtos</Typography>
		</div>
	);
};

export default Products;
