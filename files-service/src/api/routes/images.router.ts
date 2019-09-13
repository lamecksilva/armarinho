import multer from 'multer';
import { Router } from 'express';

import { saveImage } from '../controllers';
import * as validators from '../../middlewares';

const router = Router();
const upload = multer();

// Route to save image in disk
router.post('/save', upload.single('image'), validators.validateImageInput, saveImage);

export default router;
