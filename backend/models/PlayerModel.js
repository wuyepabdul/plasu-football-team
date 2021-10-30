import mongoose from 'mongoose';

const playerGameInfosSchema = new mongoose.Schema.Types({
  competitionName: { type: String },
  goals: [{ match: { type: String }, timeScored: { type: Date } }],
  assists: [{ match: { type: String }, timeScored: { type: Date } }],
  redCards: [{ match: { type: String }, timeBooked: { type: Date } }],
  yellowCards: [{ match: { type: String }, timeBooked: { type: Date } }],
  foulsCommitted: [{ match: { type: String } }],
});

const playerSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  popularName: { type: String },
  position: { type: String },
  playerGameInfo: [playerGameInfosSchema],
  gender: { type: String },
  jerseySize: { type: String },
  jerseyNumber: { type: Number },
  shoeSize: { type: Number },
  matNumber: { type: String },
  age: { type: String },
  schoolAddress: { type: String },
  homeAddress: { type: String },
  stateOfOrigin: { type: String },
  localGovArea: { type: String },
  phoneNum: { type: Number },
  height: { type: String },
  weight: { type: String },
},{timestamps:true});

const Player = mongoose.model('Player', playerSchema);
export default Player;
