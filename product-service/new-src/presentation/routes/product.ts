import { Router, Request, Response } from 'express';

import { getProducts, addProduct } from '../../data';

const router = Router();

router.get('/', async (req: Request, res: Response) => {
	const products = await getProducts();
	console.dir(products);

	return res.json({ success: true });
});

router.get('/insert', async (req: Request, res: Response) => {
	const product = await addProduct();

	return res.json({ success: true, product });
});

export default router;
