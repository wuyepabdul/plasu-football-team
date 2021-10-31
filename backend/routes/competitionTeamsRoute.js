import express from 'express';
import { getTeamController, registerTeamController } from '../controllers/competitionTeamsController.js';
const router = express.Router();

router.post('/', registerTeamController);

router.get('/:id', getTeamController);

export default router;
