const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const roomCodeSchema = new Schema({
  roomID: { type: String, required: true, unique: true },
  code: { type: String, default: '' }
});

const RoomCode = model('RoomCode', roomCodeSchema);
module.exports = RoomCode;