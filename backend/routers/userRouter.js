// imports
import { Router } from 'express';
import { signUp, userLogin } from './../controllers/userController.js';

// define router
const router = Router();

// mount controller
router.post('/signup', signUp);
router.post('/login', userLogin);

// exports
export default router;
