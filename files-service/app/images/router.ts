import multer from 'multer';
import { Router } from 'express';

import { saveImage } from './controller';

const router = Router();
const upload = multer();

// Route to save image in disk
router.post('/save', upload.single('image'), saveImage);

export default router;
