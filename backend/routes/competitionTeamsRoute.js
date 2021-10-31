import express from 'express';
import {
  deleteCompetitionTeamController,
  getAllTeamsController,
  getTeamController,
  registerTeamController,
  updateTeamController,
} from '../controllers/competitionTeamsController.js';
const router = express.Router();

router.post('/', registerTeamController);

router.get('/', getAllTeamsController);

router.get('/:id', getTeamController);

router.put('/:id', updateTeamController);

router.delete('/:id', deleteCompetitionTeamController);

export default router;
