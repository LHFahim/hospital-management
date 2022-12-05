const Services = require("../Models/services");

exports.createService = async (req, res) => {
  try {
    const existedServices = await Services.findOne({
      serviceId: req.body.serviceId,
    });
    if (existedServices) {
      return res.status(200).json({ message: "This service Alredy exist" });
    }

    const newService = await new Services({
      serviceId: req.body.serviceId,
      serviceName: req.body.serviceName,
      charge: req.body.charge,
      duration: req.body.duration,
      notes: req.body.notes,
    });

    console.log(req.body);

    const saveService = newService.save();

    if (saveService) {
      return res.status(200).json({ message: "Service created succesfully" });
    }
  } catch (error) {
    return res.status(200).json(error);
  }
};

exports.fetchService = async (req, res) => {
  try {
    const Service = await Services.find({});
    if (Service) {
      return res.status(200).json(Service);
    }
  } catch (error) {
    return res.status(400).json(error);
  }
};

exports.updateServices = async (req, res) => {
  const id = req.params.id;

  try {
    const updateServices = await Services.findOneAndUpdate(
      { _id: id },
      {
        serviceId: req.body.serviceId,
        serviceName: req.body.serviceName,
        charge: req.body.charge,
        duration: req.body.duration,
        notes: req.body.notes,
      },
      { new: true }
    );

    if (updateServices) {
      return res.status(200).json({ message: "Service updated succesfully" });
    }
  } catch (error) {
    return res.status(400).json(error);
  }
};

exports.deleteServices = async (req, res) => {
  const id = req.params.id;

  try {
    const deleteServices = await Services.findOneAndDelete({ _id: id });

    if (deleteServices) {
      return res.status(200).json({ message: "Service deleted succesfully" });
    }
  } catch (error) {
    return res.status(400).json(error);
  }
};
