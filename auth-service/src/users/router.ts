import { Router } from 'express';

import * as userController from './controller';

const router = Router();

// Register route
router.post('/register', userController.registerUser);

// Return all Users route
router.get('/', userController.getUsers);

// Return user data route
router.get('/:query', userController.getUser);

// Update user route
router.put('/:id', userController.editUser);

// Delete user route
router.delete('/:id', userController.deleteUser);

// Login route
router.post('/login', userController.loginUser);

export default router;
