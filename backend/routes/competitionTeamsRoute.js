import express from 'express';
import {
  deleteTeamController,
  getAllTeamsController,
  getTeamController,
  registerTeamController,
  teamDeletePlayerController,
  teamRegPlayerController,
  teamUpdatePlayerController,
  updateTeamController,
} from '../controllers/competitionTeamsController.js';
const router = express.Router();

router.post('/', registerTeamController);

router.get('/', getAllTeamsController);

router.post('/:id/player', teamRegPlayerController);

router.put('/:id/player/:playerId', teamUpdatePlayerController);

router.delete('/:id/player/:playerId', teamDeletePlayerController);

router.get('/:id', getTeamController);

router.put('/:id', updateTeamController);

router.delete('/:id', deleteTeamController);

export default router;
