import { Router, Request, Response } from 'express';

import { getProducts, addProduct } from '../../data';

const router = Router();

router.get('/', async (req: Request, res: Response) => {
	console.log(req.path)
	const products = await getProducts();
	console.dir(products);

	return res.json({ success: true, products });
});

router.post('/insert', async (req: Request, res: Response) => {
	const { name, category, size } = req.body;
	console.log(req.body);

	const product = await addProduct({ name, category, size });

	return res.json({ success: true, product });
});

export default router;
