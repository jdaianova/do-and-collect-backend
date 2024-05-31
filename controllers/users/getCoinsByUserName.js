const User = require("../../models/User");
const errorHandler = require("../../utils/errorHandler");

const getCoinsByUserName = async (req, res) => {
  try {
    const user = await User.findOne({ username: req.params.username });
    if (!user) return res.status(404).json({ message: "User not found" });
    res.status(200).json({ username: user.username, coins: user.coins });
  } catch (err) {
    errorHandler(err, res);
  }
};

module.exports = getCoinsByUserName;
