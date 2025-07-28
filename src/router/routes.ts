import { Router } from 'express';
import { UserController } from '../controllers/UserController';
import { AuthController } from '../controllers/AuthController';

const router = Router();

router.post('/register', UserController.register);
router.post('/login', AuthController.login);

export { router };
