const mongoose = require("mongoose");
const AutoIncrement = require("mongoose-sequence")(mongoose);

const doctorSchema = new mongoose.Schema(
  {
    _id: Number,
    firstName: {
      type: String,
    },

    lastName: {
      type: String,
    },

    gender: {
      type: String,
    },

    nicNumber: {
      type: String,
    },

    homeTelephone: {
      type: String,
    },

    mobile: {
      type: String,
    },

    address: {
      type: String,
    },

    qualifiqation: {
      type: String,
    },

    specialization: {
      type: String,
    },

    doctorType: {
      type: String,
    },

    charge: {
      type: String,
    },

    note: {
      type: String,
    },

    chanelingCharge: {
      type: String,
    },

    salery: {
      type: String,
    },

    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
  },
  { _id: false }
);
doctorSchema.plugin(AutoIncrement);

module.exports = mongoose.model("Doctors", doctorSchema);
