import express from 'express';
import {
  createCompetitionController,
  deleteCompetitionController,
  getAllCompetitonsController,
  getCompetitonById,
  updateCompetitonById,
} from '../controllers/competitionController.js';

const router = express.Router();

router.post('/', createCompetitionController);

router.get('/', getAllCompetitonsController);

router.get('/:id', getCompetitonById);

router.put('/:id', updateCompetitonById);

router.delete('/:id', deleteCompetitionController);

export default router;
