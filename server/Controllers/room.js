const Rooms = require("../Models/room");

exports.createRoom = async (req, res) => {
  try {
    const existedRooms = await Rooms.findOne({ roomid: req.body.roomid });
    if (existedRooms) {
      return res.status(200).json({ message: "This Room Id Alredy exist" });
    }

    console.log(req.body);

    const newRoom = new Rooms({
      roomid: req.body.roomid,
      roomType: req.body.roomType,
      roomRate: req.body.roomRate,
      notes: req.body.notes,
    });

    console.log("inside controller room ==>");
    console.log(newRoom);

    const saveRoom = newRoom.save();

    if (saveRoom) {
      return res.status(200).json({ message: "Room created succesfully" });
    }
  } catch (error) {
    return res.status(200).json(error);
  }
};

exports.fetchRoom = async (req, res) => {
  try {
    const Room = await Rooms.find({});
    if (Room) {
      return res.status(200).json(Room);
    }
  } catch (error) {
    return res.status(400).json(error);
  }
};

exports.updateRooms = async (req, res) => {
  const id = req.params.id;

  try {
    const updateRooms = await Rooms.findOneAndUpdate(
      { _id: id },
      {
        roomid: req.body.roomid,
        roomType: req.body.roomType,
        roomRate: req.body.roomRate,
        notes: req.body.notes,
      },
      { new: true }
    );

    if (updateRooms) {
      return res.status(200).json({ message: "Rooms updated succesfully" });
    }
  } catch (error) {
    return res.status(400).json(error);
  }
};

exports.deleteRooms = async (req, res) => {
  const id = req.params.id;

  try {
    const deleteRooms = await Rooms.findOneAndDelete({ _id: id });

    if (deleteRooms) {
      return res.status(200).json({ message: "Room deleted succesfully" });
    }
  } catch (error) {
    return res.status(400).json(error);
  }
};
