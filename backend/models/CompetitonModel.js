import mongoose from 'mongoose';
const { ObjectId } = mongoose.Schema.Types;

const competionSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    topScorers: [{ playerName: { type: ObjectId, ref: 'Player' } }],
    numberOfTeams: { type: Number, required: true },
    numOfTeamPlayers: { type: Number, required: true },
    numOfYellowCardsToDisqualify: { type: Number, required: true },
    matchResults: [{ type: ObjectId, ref: 'Match' }],
    startDate: { type: String },
    endDate: { type: String },
    reports: { type: String },
    status: { type: String, default: 'Not Started' },
  },
  { timestamps: true }
);

const Competition = mongoose.model('Competition', competionSchema);
export default Competition;
