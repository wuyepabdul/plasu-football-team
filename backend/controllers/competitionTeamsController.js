import asyncHandler from 'express-async-handler';
import CompetitionTeam from '../models/CompetitionTeamsModel.js';
import { v4 as uuidv4 } from 'uuid';

export const registerTeamController = asyncHandler(async (req, res) => {
  try {
    const { teamName, teamColors, coach, competition } = req.body;
    const teamExist = await CompetitionTeam.findOne({ teamName });
    if (teamExist) {
      return res.status(400).json({ message: 'A Team with this name exist' });
    } else {
      const newTeam = new CompetitionTeam({
        teamName,
        teamColors,
        coach,
        competition,
      });
      const savedTeam = await newTeam.save();
      res.json({ message: 'Team registration successful', savedTeam });
    }
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
        return res
          .status(400)
          .json({ message: 'Already registered', alreadyRegistered });
      } else {
        const playerInfo = {
          id: uuidv4(),
          name,
          position,
          jerseyNumber,
          department,
          faculty,
          localGovArea,
        };
        team.players.push(playerInfo);
        await team.save();
      }
    } else {
      return res.status(404).json({ message: 'Team not found' });
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

export const teamUpdatePlayerController = asyncHandler(async (req, res) => {
  try {
    const { name, position, jerseyNumber, department, faculty, localGovArea } =
      req.body;
    const team = await CompetitionTeam.findById(req.params.id);
    if (team) {
      let player = team.players.find(
        (player) => player.id === req.params.playerId
      );
      if (player) {
        player.name = name || player.name;
        player.position = position || player.position;
        player.jerseyNumber = jerseyNumber || player.jerseyNumber;
        player.department = department || player.department;
        player.faculty = faculty || player.faculty;
        player.localGovArea = localGovArea || player.localGovArea;
        await team.save();
      } else {
        return res.status(404).json({ message: 'Player not found' });
      }
    } else {
      res.status(404).json({ message: 'Team not found' });
    }
    res.json({ message: 'Player info updated successFully', team });
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
