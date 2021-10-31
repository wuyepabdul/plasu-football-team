import express from 'express';
import { registerTeam } from '../controllers/competitionTeamsController';
const router = express.Router();

router.post('/', registerTeam);

export default router;
