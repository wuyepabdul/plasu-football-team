import express from 'express';
import { signinController, signupController } from '../controllers/authController.js';
import { registerValidator, signinValidator, validatorResult } from '../middlewares/validate.js';
const router = express.Router();

router.post('/signup', registerValidator, validatorResult, signupController);
router.post('/login', signinValidator, validatorResult, signinController);

export default router;