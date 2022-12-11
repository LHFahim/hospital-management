const Admin = require("../Models/admin");

exports.andminLogin = async (req, res) => {
  try {
    const username = req.body.username;
    const password = req.body.password;

    const existedAdmin = await Admin.findOne({ username: username });

    if (!existedAdmin) {
      return res.status(200).json({ message: "User doesn't exist" });
    } else if (existedAdmin.password !== password) {
      return res.status(200).json({ message: "Wrong Password" });
    } else if (
      existedAdmin.username == username &&
      existedAdmin.password == password
    ) {
      return res.status(200).json({ message: "Login Succesfull" });
    }
  } catch (error) {
    return res.status(200).json(error);
  }
};
