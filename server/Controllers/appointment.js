const Appointment = require("../Models/appoinment");
const Patient = require("../Models/patient");
const Doctor = require("../Models/doctor");

exports.createAppointment = async (req, res) => {
  try {
    const existedAppointment = await Appointment.findOne({
      scheduleId: req.body.scheduleId,
    });
    if (existedAppointment) {
      return res.status(200).json({ message: "Appointment Alredy exist" });
    }

    const patientExists = await Patient.findOne({
      personalPhone: req.body.patientPhone,
    });

    if (!patientExists) {
      return res.status(200).json({ message: "This patient does not exist!" });
    }

    const doctor = await Doctor.find({ nicNumber: req.body.doctorId });
    console.log(doctor);

    let patientTotalCost = patientExists.totalCost;

    patientTotalCost += Number(doctor[0].charge);
    console.log(patientTotalCost, typeof patientTotalCost);

    patientExists.totalCost = patientTotalCost;

    patientExists.save();

    const newAppointment = new Appointment({
      scheduleId: req.body.scheduleId,
      doctorId: req.body.doctorId,
      TimeIn: req.body.TimeIn,
      TimeOut: req.body.TimeOut,
      AvailableDate: req.body.AvailableDate,
      Note: req.body.Note,
      patientPhone: req.body.patientPhone,
    });

    const saveAppointment = newAppointment.save();

    if (saveAppointment) {
      return res
        .status(200)
        .json({ message: "Appointment created succesfully" });
    }
  } catch (error) {
    return res.status(200).json(error);
  }
};

exports.fetchAppointment = async (req, res) => {
  try {
    const Appointments = await Appointment.find({});
    if (Appointments) {
      return res.status(200).json(Appointments);
    }
  } catch (error) {
    return res.status(400).json(error);
  }
};

exports.updateAppointment = async (req, res) => {
  const id = req.params.id;

  try {
    const updateApointment = await Appointment.findOneAndUpdate(
      { _id: id },
      {
        scheduleId: req.body.scheduleId,
        doctorId: req.body.doctorId,
        TimeIn: req.body.TimeIn,
        TimeOut: req.body.TimeOut,
        AvailableDate: req.body.AvailableDate,
        Note: req.body.Note,
      },
      { new: true }
    );

    if (updateApointment) {
      return res
        .status(200)
        .json({ message: "Appointment updated succesfully" });
    }
  } catch (error) {
    return res.status(400).json(error);
  }
};

exports.deleteAppointment = async (req, res) => {
  const id = req.params.id;

  try {
    const deleteAppointment = await Appointment.findOneAndDelete({ _id: id });

    if (deleteAppointment) {
      return res
        .status(200)
        .json({ message: "Appointment deleted succesfully" });
    }
  } catch (error) {
    return res.status(400).json(error);
  }
};
