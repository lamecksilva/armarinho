import { Router } from 'express';

import * as authController from './controller';

const router = Router();

router.post('/login', authController.loginUser);

export default router;
