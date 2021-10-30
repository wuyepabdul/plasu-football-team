import mongoose from 'mongoose';
// import { ObjectId } from 'mongoose';
const { ObjectId } = mongoose.Schema.Types;

const playerDetailsSchema = new mongoose.Schema({
  playerName: { type: String },
  jerseyNumber: { type: Number },
});

const goalScorerSchema = new mongoose.Schema({
  goalScorerName: { type: String },
  assistPlayerName: { type: String },
});

const matchDetailsSchema = new mongoose.Schema({
  team1TotalShots: { type: Number, default: 0 },
  team2TotalShots: { type: Number, default: 0 },
  team1ShotsOnTarget: { type: Number, default: 0 },
  team2ShotsOnTarget: { type: Number, default: 0 },
  team1Goals: {
    numberOfGoals: { type: Number, default: 0 },
    goalInfo: [goalScorerSchema],
  },
  team2Goals: {
    numberOfGoals: { type: Number, default: 0 },
    goalInfo: [goalScorerSchema],
  },
  team1YellowCards: {
    numberOfCards: { type: Number, default: 0 },
    playersInfo: [playerDetailsSchema],
  },
  team2YellowCards: {
    numberOfCards: { type: Number, default: 0 },
    playersInfo: [playerDetailsSchema],
  },
  team1RedCards: { type: Number, default: 0 },
  team2RedCards: { type: Number, default: 0 },
  team1Fouls: {
    numberOfFouls: { type: Number, default: 0 },
    playersInfo: [playerDetailsSchema],
  },
  team2Fouls: {
    numberOfFouls: { type: Number, default: 0 },
    playersInfo: [playerDetailsSchema],
  },
});

const matchSchema = new mongoose.Schema(
  {
    team1: { type: String, required: true },
    team2: { type: String, required: true },
    date: { type: Date },
    time: { type: Date },
    matchDetails: { matchDetailsSchema },
    referee:{name:{type:ObjectId}}
  },
  { timestamps: true }
);

const Match = mongoose.model('Match', matchSchema);
export default Match;
