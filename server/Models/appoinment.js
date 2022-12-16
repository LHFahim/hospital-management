const mongoose = require("mongoose");

const appointmentSchema = new mongoose.Schema({
  scheduleId: String,
  doctorId: String,
  TimeIn: String,
  TimeOut: String,
  AvailableDate: String,
  Note: String,
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  patientPhone: String,
});

module.exports = mongoose.model("appointment", appointmentSchema);
