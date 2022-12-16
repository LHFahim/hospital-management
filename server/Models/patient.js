const mongoose = require("mongoose");

const patientSchema = new mongoose.Schema(
  {
    address: String,
    admitionDate: String,
    gender: String,
    patientName: String,
    patientType: String,
    personalPhone: String,
    referral: String,
    roomId: String,
    wardID: String,
    isDischarged: Boolean,
    medicineCost: {
      type: Number,
      default: 0,
    },
    totalCost: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Patient", patientSchema);
