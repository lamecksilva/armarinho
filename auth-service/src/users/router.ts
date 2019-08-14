import { Router } from 'express';

import * as userController from './controller';

const router = Router();

// Register route
router.post('/register', userController.registerUser);

// Return all Users route
router.get('/', userController.getUsers);

// Return user data route
router.get('/:id', userController.getUser);

// Update user route
router.put('/:id', userController.editUser);

// Delete user route
router.delete('/:id', userController.deleteUser);

export default router;
