const Task = require("../../models/Task");
const errorHandler = require("../../utils/errorHandler");

const getTaskById = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    if (!task) return res.status(404).json({ message: "Task not found" });
    res.status(200).json(task);
  } catch (err) {
    errorHandler(err, res);
  }
};

module.exports = getTaskById;
