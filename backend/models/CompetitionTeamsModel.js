import mongoose from 'mongoose';
const {ObjectId} = mongoose.Schema.Types;

const playerSchema = new mongoose.Schema({
  name: { type: String, trim:true},
  position: { type: String, trim:true  },
  jerseyNumber: { type: Number, trim:true },
  department: { type: String, trim:true },
  faculty: { type: String, trim:true },
  localGovArea: { type: String, trim:true },
});

const teamSchema = new mongoose.Schema(
  {
    teamName: { type: String, required: true },
    teamColors: { type: String },
    players: [playerSchema],
    coach: { type: String },
    competition:{type:ObjectId, ref:'Competition'}
  },
  { timestamps: true }
);
const CompetitionTeam = new mongoose.model('CompetitonTeam', teamSchema);
export default CompetitionTeam;