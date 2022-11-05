const Appointment = require('../Models/appoinment');

exports.createAppointment = async(req, res) => {

    try {
        const existedAppointment = await Appointment.findOne({ scheduleId: req.body.scheduleId })
        if (existedAppointment) {
            return res.status(200).json({ message: "Appointment Alredy exist" })
        }

        const newAppointment = await new Appointment({
            scheduleId: req.body.scheduleId,
            doctorId: req.body.doctorId,
            TimeIn: req.body.TimeIn,
            TimeOut: req.body.TimeOut,
            AvailableDate: req.body.AvailableDate,
            Note: req.body.Note,
            
        })

        const saveAppointment = newAppointment.save()

        if (saveAppointment) {
            return res.status(200).json({ message: "Appointment created succesfully" })
        }
    } catch (error) {
        return res.status(200).json(error)
    }
}

exports.fetchAppointment = async(req, res) => {
    try {
        const Appointments = await Appointment.find({});
        if (Appointments) {
            return res.status(200).json(Appointments)
        }
    } catch (error) {
        return res.status(400).json(error)

    }
}