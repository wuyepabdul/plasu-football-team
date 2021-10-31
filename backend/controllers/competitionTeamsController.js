import asyncHandler from 'express-async-handler';
import CompetitionTeam from '../models/CompetitionTeamsModel.js';

export const registerTeamController = asyncHandler(async (req, res) => {
  try {
    const { teamName, teamColors, coach, competition } = req.body;
    const newTeam = new CompetitionTeam({
      teamName,
      teamColors,
      coach,
      competition,
    });
    const savedTeam = await newTeam.save();
    res.json({ message: 'Team registration successful', savedTeam });
  } catch (error) {
    console.log('error', error.message);
    res.status(500).json({ message: 'Server error, try again later' });
  }
});

export const getTeamController = asyncHandler(async (req, res) => {
  try {
    const team = await CompetitionTeam.findById(req.params.id);
    if (team) {
      res.json(team);
    } else {
      res.status(404).json({ message: 'Team not found' });
    }
  } catch (error) {
    console.log('error', error.message);
    res.status(500).json({ message: 'Server error, try again later' });
  }
});
