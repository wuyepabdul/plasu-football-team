import asyncHandler from 'express-async-handler';
import Competition from '../models/CompetitonModel.js';

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
    } else {
      const competiton = new Competition({
        title,
        description,
        numberOfTeams,
        numOfTeamPlayers,
        numOfYellowCardsToDisqualify,
        startDate,
        endDate,
        reports,
      });
      const savedCompetiton = await competiton.save();
      res.json({ message: 'Competition Created', savedCompetiton });
    }
  } catch (error) {
    console.log('error', error.message);
    res.status(500).json({ message: 'Server error' });
  }
});

export const getAllCompetitonsController = asyncHandler(async (req, res) => {
  try {
    const competitions = await Competition.find({});
    if (competitions.length > 0) {
      res.json(competitions);
    } else {
      res.json({ message: 'There are no competitons now' });
    }
  } catch (error) {
    console.log('error', error.message);
    res.status(500).json({ message: 'Server error' });
  }
});

export const getCompetitonById = asyncHandler(async (req, res) => {
  try {
    const competition = await Competition.findById(req.params.id);
    if (competition){
      res.json(competition);
    } else{
      res.status(404).json({ message: 'Competiton not found' });
    }
  } catch (error) {
    console.log('error', error.message);
    res.status(500).json({ message: 'Server error' });
  }
});

export const updateCompetitonById = asyncHandler(async (req, res) => {
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

    const competitionTitleExist = await Competition.find({title});
    const competition = await Competition.findById(req.params.id);

  
    if (competition) {
      if(competitionTitleExist){
       return res.status(400).json({message:'A competition already exist with this title'})
      }else{
        competition.title = title || competition.title;
        competition.description = description || competition.description;
        competition.numberOfTeams = numberOfTeams || competition.numberOfTeams;
        competition.numOfTeamPlayers =
          numOfTeamPlayers || competition.numOfTeamPlayers;
        competition.numOfYellowCardsToDisqualify =
          numOfYellowCardsToDisqualify ||
          competition.numOfYellowCardsToDisqualify;
        competition.startDate = startDate || competition.startDate;
        competition.endDate = endDate || competition.endDate;
        competition.reports = reports || competition.reports;
      }
    }
    competition.save();
    res.json({ message: 'Competition updated successfully', competition });
  } catch (error) {
    console.log('error', error.message);
    res.status(500).json({ message: 'Server error' });
  }
});

export const deleteCompetitionController = asyncHandler(async (req, res) => {
  try {
    const deletedCompetition = await Competition.findOneAndDelete({
      _id: req.params.id,
    }).exec();
    if (deletedCompetition) {
      res.json({ message: 'Competiton Deleted', deletedCompetition });
    } else {
      res.status(404).json('Competition not found');
    }
  } catch (error) {
    console.log('error', error.message);
    res.status(500).json({ message: 'Server error' });
  }
});
