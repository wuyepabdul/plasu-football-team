import express from 'express';
import { signinController, signupController } from '../controllers/authController.js';
import { createCompetitionController } from '../controllers/competitionController.js';
import { registerValidator, signinValidator, validatorResult } from '../middlewares/validate.js';
const router = express.Router();

router.post('/signup', registerValidator, validatorResult, signupController);
router.post('/login', signinValidator, validatorResult, signinController);

// router.post('/competiton',createCompetitionController)

export default router;