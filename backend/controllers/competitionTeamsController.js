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

export const teamRegPlayerController = asyncHandler(async (req, res) => {
  try {
    const { name, position, jerseyNumber, department, faculty, localGovArea } =
      req.body;
    const team = await CompetitionTeam.findById(req.params.id);
    if (team) {
      const alreadyRegistered = team.players.find(
        (player) => player.name === name
      );
      if (alreadyRegistered) {
        res
          .status(400)
          .json({ message: 'Already registered', alreadyRegistered });
      } else {
        const playerInfo = {
          name,
          position,
          jerseyNumber,
          department,
          faculty,
          localGovArea,
        };
        console.log(playerInfo);
        team.players.push(playerInfo);
        await team.save();
      }
    } else {
      res.status(404).json({ message: 'Team not found' });
    }
    res.json({ message: 'Player added successFully', team });
  } catch (error) {
    console.log('error', error.message);
    res.status(500).json({ message: 'Server error, try again later' });
  }
});

export const teamDeletePlayerController = asyncHandler(async (req, res) => {
  try {
    const { name } = req.body;
    const team = await CompetitionTeam.findById(req.params.id);
    if (team) {
      const player = team.players.find((player) => player.name === name);
      if (player) {
        console.log(team.players);
        console.log(player);
        team.players.pull(player);

        await team.save();
      }
    } else {
      res.status(404).json({ message: 'Team not found' });
    }
    res.json({ message: 'Player deleted successFully', team });
  } catch (error) {
    console.log('error', error.message);
    res.status(500).json({ message: 'Server error, try again later' });
  }
});

export const getAllTeamsController = asyncHandler(async (req, res) => {
  try {
    const teams = await CompetitionTeam.find({});
    if (teams.length === 0) {
      res.json({ message: 'No teams registered yet' });
    } else {
      res.json(teams);
    }
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

export const updateTeamController = asyncHandler(async (req, res) => {
  try {
    const { teamName, teamColors, coach, competition } = req.body;
    const team = await CompetitionTeam.findById(req.params.id);
    if (team) {
      team.teamName = teamName || team.teamName;
      team.teamColors = teamColors || team.teamColors;
      team.coach = coach || team.coach;
      team.competition = competition || team.competition;
      /*   team.players.map((player) => {
        player.name = playerInfo.name || player.name;
        player.position = playerInfo.position || player.position;
        player.jerseyNumber = playerInfo.jerseyNumber || player.jerseyNumber;
        player.department = playerInfo.department || player.department;
        player.faculty = playerInfo.faculty || player.faculty;
        player.localGovArea = playerInfo.localGovArea || player.localGovArea;
      }); */
    } else {
      res.status(404).json({ message: 'Team not found' });
    }
    await team.save();
    res.json({ message: 'Team Info updated successfully', team });
  } catch (error) {
    console.log('error', error.message);
    res.status(500).json({ message: 'Server error, try again later' });
  }
});

export const deleteCompetitionTeamController = asyncHandler(
  async (req, res) => {
    try {
      const deletedTeam = await CompetitionTeam.findOneAndDelete({
        _id: req.params.id,
      }).exec();
      if (deletedTeam) {
        res.json({ message: 'Team Deleted', deletedTeam });
      } else {
        res.status(404).json('Team not found');
      }
    } catch (error) {
      console.log('error', error.message);
      res.status(500).json({ message: 'Server error' });
    }
  }
);
