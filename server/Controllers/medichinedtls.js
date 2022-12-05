const Medichine = require('../Models/medichinedtls');

exports.createMedichine = async(req, res) => {

    try {
        const existedMedichine = await Medichine.findOne({ productID: req.body.productID })
        if (existedMedichine) {
            return res.status(200).json({ message: "This Medichine Alredy exist" })
        }

        const newMedichine = await new Medichine({
            productID: req.body.productID,
            productName: req.body.productName,
            supplierID: req.body.supplierID,
            categoryID: req.body.categoryID,
            unitprice: req.body.unitprice,
            unitsInStoct: req.body.unitsInStoct, 
        })

        const saveMedichine = newMedichine.save()

        if (saveMedichine) {
            return res.status(200).json({ message: "Medichine created succesfully" })
        }
    } catch (error) {
        return res.status(200).json(error)
    }
}

exports.fetchMedichine = async(req, res) => {
    try {
        const medichine = await Medichine.find({});
        if (medichine) {
            return res.status(200).json(medichine)
        }
    } catch (error) {
        return res.status(400).json(error)

    }
}

exports.updateMedichine = async (req, res)=>{

    const id =req.params.id
    
    try {
        const updateMedichine = await Medichine.findOneAndUpdate({_id: id}, {
            productID: req.body.productID,
            productName: req.body.productName,
            supplierID: req.body.supplierID,
            categoryID: req.body.categoryID,
            unitprice: req.body.unitprice,
            unitsInStoct: req.body.unitsInStoct, 
        }, {new: true});

        if (updateMedichine) {
            return res.status(200).json({ message: "Medichine updated succesfully" })
        }

    } catch (error) {
        return res.status(400).json(error)
    }

}

exports.deleteMedichine = async (req, res)=>{

    const id = req.params.id

    try {
        const deleteMedichine = await Medichine.findOneAndDelete({_id: id});

        if (deleteMedichine) {
            return res.status(200).json({ message: "Medichine deleted succesfully" })
        }
    } catch (error) {
        return res.status(400).json(error)
    }
}