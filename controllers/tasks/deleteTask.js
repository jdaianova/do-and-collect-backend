const Task = require("../../models/Task");
const errorHandler = require("../../utils/errorHandler");

const deleteTask = async (req, res) => {
  try {
    const task = await Task.findByIdAndDelete(req.params.id);
    if (!task) return res.status(404).json({ message: "Task not found" });

    res.status(200).json({ message: "Task deleted" });
  } catch (err) {
    errorHandler(err, res);
  }
};

module.exports = deleteTask;
