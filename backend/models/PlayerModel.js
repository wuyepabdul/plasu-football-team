import mongoose from 'mongoose';

const playerSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  popularName: { type: String },
  position: { type: String },
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
});

const Player = mongoose.model('Player',playerSchema);
export default Player;