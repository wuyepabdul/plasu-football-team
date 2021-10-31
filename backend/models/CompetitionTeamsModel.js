import mongoose from 'mongoose';
const {ObjectId} = mongoose.Schema.Types;

const playerSchema = new mongoose.Schema({
  name: { type: String },
  position: { type: String },
  jerseyNumber: { type: Number },
  department: { type: String },
  faculty: { type: String },
  localGovArea: { type: String },
});

const teamSchema = new mongoose.Schema(
  {
    teamName: { type: String, required: true },
    teamLogo: { type: String },
    players: [playerSchema],
    coach: { type: String },
    competition:{type:ObjectId, ref:'Competition'}
  },
  { timestamps: true }
);
const CompetitionTeam = new mongoose.model('CompetitonTeam', teamSchema);
export default CompetitionTeam;