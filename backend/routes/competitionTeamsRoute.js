import express from 'express';
import {
  deleteCompetitionTeamController,
  getAllTeamsController,
  getTeamController,
  registerTeamController,
  teamDeletePlayerController,
  teamRegPlayerController,
  updateTeamController,
} from '../controllers/competitionTeamsController.js';
const router = express.Router();

router.post('/', registerTeamController);

router.get('/', getAllTeamsController);

router.post('/:id/regPlayer', teamRegPlayerController);

router.delete('/:id/regPlayer', teamDeletePlayerController);

router.get('/:id', getTeamController);

router.put('/:id', updateTeamController);

router.delete('/:id', deleteCompetitionTeamController);

export default router;
