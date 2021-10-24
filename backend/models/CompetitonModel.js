import mongoose from 'mongoose';

const competionSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    numberOfTeams: { type: Number, required: true },
    numOfTeamPlayers: { type: Number, required: true },
    numOfYellowCardsToDisqualify: { type: Number, required: true },
    startDate: { type: String, required: true },
    endDate: { type: String, required: true },
    reports: { type: String },
    status: { type: String, default: 'Not Started' },
  },
  { timestamps: true }
);

const Competition = mongoose.model('Competition', competionSchema);
export default Competition;
