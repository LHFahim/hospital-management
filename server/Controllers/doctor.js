const Doctors = require('../Models/doctor');

exports.createDoctor = async(req, res) => {

    try {
        const existedDoctor = await Doctors.findOne({ nicNumber: req.body.nicNumber })
        if (existedDoctor) {
            return res.status(200).json({ message: "Doctor Alredy exist" })
        }

        const newDoctor = await new Doctors({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            gender: req.body.gender,
            nicNumber: req.body.nicNumber,
            homeTelephone: req.body.homeTelephone,
            mobile: req.body.mobile,
            address: req.body.address,
            qualifiqation: req.body.qualifiqation,
            specialization: req.body.specialization,
            doctorType: req.body.doctorType,
            charge: req.body.charge,
            note: req.body.note,
            chanelingCharge: req.body.chanelingCharge,
            salery: req.body.salery,
        })

        const saveDoctor = newDoctor.save()

        if (saveDoctor) {
            return res.status(200).json({ message: "Doctor created succesfully" })
        }
    } catch (error) {
        return res.status(200).json(error)
    }
}

exports.fetchDoctor = async(req, res) => {
    try {
        const doctors = await Doctors.find({});
        if (doctors) {
            return res.status(200).json(doctors)
        }
    } catch (error) {
        return res.status(400).json(error)

    }
}

exports.updateDoctor = async (req, res)=>{

    const id =req.params.id
    
    try {
        const updateDoctor = await Doctors.findOneAndUpdate({_id: id}, {

            firstName: req.body.firstName,
                lastName: req.body.lastName,
                gender: req.body.gender,
                nicNumber: req.body.nicNumber,
                homeTelephone: req.body.homeTelephone,
                mobile: req.body.mobile,
                address: req.body.address,
                qualifiqation: req.body.qualifiqation,
                specialization: req.body.specialization,
                doctorType: req.body.doctorType,
                charge: req.body.charge,
                note: req.body.note,
                chanelingCharge: req.body.chanelingCharge,
                salery: req.body.salery,
    
        }, {new: true});

        if (updateDoctor) {
            return res.status(200).json({ message: "Doctor updated succesfully" })
        }

    } catch (error) {
        return res.status(400).json(error)
    }

}

exports.deleteDoctor = async (req, res)=>{

    const id = req.params.id

    try {
        const deleteDoctor = await Doctors.findOneAndDelete({_id: id});

        if (deleteDoctor) {
            return res.status(200).json({ message: "Doctor deleted succesfully" })
        }
    } catch (error) {
        return res.status(400).json(error)
    }
}