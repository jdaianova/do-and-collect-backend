const User = require("../../models/User");
const errorHandler = require("../../utils/errorHandler");

const updateUserCoins = async (req, res) => {
  try {
    const { coins } = req.body;
    if (!coins || typeof coins !== "number") {
      return res.status(400).json({ message: "Invalid coins value" });
    }

    const updatedUser = await User.findOneAndUpdate(
      { username: "Taia" },
      { coins },
      { new: true }
    );

    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({ message: "User coins updated successfully" });
  } catch (err) {
    errorHandler(err, res);
  }
};

module.exports = updateUserCoins;
