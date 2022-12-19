const Patient = require("../Models/patient");
const Room = require("../Models/room");
const Ward = require("../Models/ward");
const Medicine = require("../Models/medichinedtls");
var intervalToDuration = require("date-fns/intervalToDuration");

exports.createPatient = async (req, res) => {
  try {
    const existedPatient = await Patient.findOne({
      personalPhone: req.body.personalPhone,
    });
    if (existedPatient) {
      return res.status(200).json({ message: "This Patient Alredy exist" });
    }

    const newPatient = new Patient({
      address: req.body.address,
      admitionDate: req.body.admitionDate,
      gender: req.body.gender,
      patientName: req.body.patientName,
      patientType: req.body.patientType,
      personalPhone: req.body.personalPhone,
      referral: req.body.referral,
      roomId: req.body.roomId,
      wardID: req.body.wardID,
    });

    if (req.body.roomId) {
      const checkRoom = await Room.find({
        roomId: req.body.roomId,
        isUsed: false,
      });

      console.log(checkRoom);
      if (checkRoom.length === 0) {
        return res.status(404).json({ message: "Invalid Room ID" });
        // throw new NotFoundException("Invalid Room ID");
      }

      const findroom = await Room.findOneAndUpdate(
        { roomId: req.body.roomId },
        {
          isUsed: true,
        },
        { new: true }
      );

      if (!findroom) {
        return res.status(200).json({ message: "Invalid Room ID" });
      }

      newPatient.totalCost = findroom.roomRate;
    }

    if (req.body.wardId) {
      const checkWard = await Ward.find({
        WardId: req.body.WardId,
        bedNumber: { $lt: 5 },
      });

      console.log("Inside patient controller ward");
      console.log(checkWard);
      if (checkWard.length === 0) {
        return res.status(404).json({ message: "Invalid Ward" });
      }

      const editward = await Ward.findOneAndUpdate(
        { WardId: req.body.WardId },
        {
          $inc: { bedNumber: +1 },
        },
        { new: true }
      );

      console.log(editward);

      if (!editward) {
        return res.status(200).json({ message: "Successfully Edited" });
      }
    }

    const savePatient = newPatient.save();

    if (savePatient) {
      return res.status(200).json({ message: "Patient created succesfully" });
    }
  } catch (error) {
    return res.status(200).json(error);
  }
};

// isUsed

exports.fetchPatients = async (req, res) => {
  try {
    const Patients = await Patient.find({});
    if (Patients) {
      return res.status(200).json(Patients);
    }
  } catch (error) {
    return res.status(400).json(error);
  }
};

exports.updatePatient = async (req, res) => {
  const id = req.params.id;

  try {
    const updatePatient = await Patient.findOneAndUpdate(
      { _id: id },
      {
        address: req.body.address,
        admitionDate: req.body.admitionDate,
        gender: req.body.gender,
        patientName: req.body.patientName,
        patientType: req.body.patientType,
        personalPhone: req.body.personalPhone,
        referral: req.body.referral,
        roomId: req.body.roomId,
        wardID: req.body.wardID,
        isDischarged: false,
      },
      { new: true }
    );

    if (updatePatient) {
      return res.status(200).json({ message: "Patient updated succesfully" });
    }
  } catch (error) {
    return res.status(400).json(error);
  }
};

exports.deletePatient = async (req, res) => {
  const id = req.params.id;

  try {
    const deletePatient = await Patient.findOneAndDelete({ _id: id });

    if (deletePatient) {
      return res.status(200).json({ message: "Patient deleted succesfully" });
    }
  } catch (error) {
    return res.status(400).json(error);
  }
};

exports.findPatient = async (req, res) => {
  console.log(req.body);
  try {
    const patient = await Patient.findOne({
      personalPhone: req.body.personalPhone,
    });
    return res.status(200).json(patient);
  } catch (error) {
    return res.status(400).json(error);
  }
};

exports.dischargePatient = async (req, res) => {
  try {
    id = req.params.id;

    const updatePatient = await Patient.findOneAndUpdate(
      { _id: id },
      { isDischarged: true },
      { new: true }
    );

    await Room.findOneAndUpdate(
      { roomId: updatePatient.roomId },
      { isUsed: false }
    );

    const numberOfDays = intervalToDuration({
      start: new Date(updatePatient.createdAt),
      end: new Date(),
    });

    const foundTotalCost = Number(updatePatient.totalCost);

    const foundRoom = await Room.findOne({ roomId: updatePatient.roomId });

    let finalTotalCost = numberOfDays.days * Number(foundRoom.roomRate);
    finalTotalCost -= foundRoom.roomRate;
    finalTotalCost += foundTotalCost;

    updatePatient.totalCost = finalTotalCost;

    updatePatient.save();

    if (updatePatient) {
      return res
        .status(200)
        .json({ message: "Patient Action Updated succesfully" });
    }
  } catch (error) {
    return res.status(400).json(error);
  }
};

exports.buyMedichine = async (req, res) => {
  try {
    const id = req.params.id;
    const medicineId = req.params.medicineId;

    const medicineDetails = await Medicine.findOne({ _id: medicineId });
    const medicinePrice = medicineDetails.unitprice;

    const foundPatient = await Patient.findOne({ personalPhone: id });

    const foundCost = Number(foundPatient.medicineCost);

    const totalMedicineCost = foundCost + Number(medicinePrice);

    foundPatient.medicineCost = totalMedicineCost;

    const foundTotalCost = Number(foundPatient.totalCost);

    const finalTotalCost = foundTotalCost + Number(medicinePrice);

    foundPatient.totalCost = finalTotalCost;

    foundPatient.save();

    const unitsInStock = Number(medicineDetails.unitsInStoct);
    medicineDetails.unitsInStoct = unitsInStock - 1;

    medicineDetails.save();
  } catch (error) {
    return res.send(error);
  }
};
