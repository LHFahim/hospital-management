const mongoose = require("mongoose");

const roomSchema = new mongoose.Schema({
  roomid: String,
  roomType: String,
  roomRate: String,
  notes: String,
  isUsed: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("RoomDetails", roomSchema);
