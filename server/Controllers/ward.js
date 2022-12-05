const Wards = require("../Models/ward");

exports.createWard = async (req, res) => {
  try {
    const existedWards = await Wards.findOne({ wardId: req.body.wardId });
    if (existedWards) {
      return res.status(200).json({ message: "This Ward Alredy exist" });
    }

    const newWard = await new Wards({
      wardId: req.body.wardId,
      wardType: req.body.wardType,
      wardRate: req.body.wardRate,
      notes: req.body.notes,
      bedNumber: 0,
    });

    const saveWard = newWard.save();

    if (saveWard) {
      return res.status(200).json({ message: "Ward created succesfully" });
    }
  } catch (error) {
    return res.status(200).json(error);
  }
};

exports.fetchWard = async (req, res) => {
  try {
    const Ward = await Wards.find({});
    if (Ward) {
      return res.status(200).json(Ward);
    }
  } catch (error) {
    return res.status(400).json(error);
  }
};

exports.updateWard = async (req, res) => {
  const id = req.params.id;

  try {
    const updateWard = await Wards.findOneAndUpdate(
      { _id: id },
      {
        WardId: req.body.WardId,
        wardType: req.body.wardType,
        wardRate: req.body.wardRate,
        notes: req.body.notes,
      },
      { new: true }
    );

    if (updateWard) {
      return res.status(200).json({ message: "Ward updated succesfully" });
    }
  } catch (error) {
    return res.status(400).json(error);
  }
};

exports.deleteWard = async (req, res) => {
  const id = req.params.id;

  try {
    const deleteWard = await Wards.findOneAndDelete({ _id: id });

    if (deleteWard) {
      return res.status(200).json({ message: "Ward deleted succesfully" });
    }
  } catch (error) {
    return res.status(400).json(error);
  }
};
