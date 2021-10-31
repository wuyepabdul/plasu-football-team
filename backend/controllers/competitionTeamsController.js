import asyncHandler from 'express-async-handler';
import CompetitionTeam from '../models/CompetitionTeamsModel';

export const registerTeam = asyncHandler(async (req, res) => {
  try {
    const { teamName, teamLogo, coach, competition } = req.body;
    const newTeam = new CompetitionTeam({
      teamName,
      teamLogo,
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
