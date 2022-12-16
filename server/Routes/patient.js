const express = require("express");

const router = express.Router();

const {
  createPatient,
  fetchPatients,
  updatePatient,
  deletePatient,
  findPatient,
  dischargePatient,
} = require("../Controllers/patient");

router.post("/createPatient", createPatient);
router.get("/fetchPatients", fetchPatients);
router.put("/updatePatient/:id", updatePatient);
router.delete("/deletePatient/:id", deletePatient);
router.post("/findPatient", findPatient);
router.post("/dischargePatient/:id", dischargePatient);

module.exports = router;
