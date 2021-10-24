import asyncHandler from 'express-async-handler';
import Competition from '../models/CompetitonModel';

export const createCompetitionController = asyncHandler(async (req, res) => {
  try {
    const {
      title,
      description,
      numberOfTeams,
      numOfTeamPlayers,
      numOfYellowCardsToDisqualify,
      startDate,
      endDate,
      reports,
    } = req.body;
    const competitionExist = await Competition.findOne({ title });
    if (competitionExist) {
      res
        .status(400)
        .json({ message: 'A Competition already exist with this title' });
      return;
    }
    const competiton = await new Competition({
      title,
      description,
      numberOfTeams,
      numOfTeamPlayers,
      numOfYellowCardsToDisqualify,
      startDate,
      endDate,
      reports,
    }).save();
    res.json({ message: 'Competition Created', competiton });
  } catch (error) {
    console.log('error', error.messahe);
    res.status(500).json({ message: 'Server error' });
  }
});

export const getAllCompetitonsController = asyncHandler(async (req, res) => {
  try {
    const competitions = await Competition.find({});
    if (competitions.length > 0) res.json(competitions);
    res.json({ message: 'There are no competitons now' });
  } catch (error) {
    console.log('error', error.messahe);
    res.status(500).json({ message: 'Server error' });
  }
});

export const getCompetitonById = asyncHandler(async (req, res) => {
  try {
    const competiton = await Competition.findById(req.params.id);
    if (competition) res.json(competiton);
    res.status(404).json({ message: 'Competiton not found' });
  } catch (error) {
    console.log('error', error.messahe);
    res.status(500).json({ message: 'Server error' });
  }
});
