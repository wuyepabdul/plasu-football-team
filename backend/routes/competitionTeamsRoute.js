import express from 'express';
import {
  getAllTeamsController,
  getTeamController,
  registerTeamController,
} from '../controllers/competitionTeamsController.js';
const router = express.Router();

router.post('/', registerTeamController);

router.get('/', getAllTeamsController);

router.get('/:id', getTeamController);

export default router;
