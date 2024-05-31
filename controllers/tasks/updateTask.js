const Task = require("../../models/Task");
const errorHandler = require("../../utils/errorHandler");

const updateTask = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    if (!task) return res.status(404).json({ message: "Task not found" });

    if (req.body.description != null) task.description = req.body.description;
    if (req.body.completed != null) task.completed = req.body.completed;
    if (req.body.reward != null) task.reward = req.body.reward;
    if (req.body.completionDate != null)
      task.completionDate = req.body.completionDate;

    const updatedTask = await task.save();
    res.status(200).json(updatedTask);
  } catch (err) {
    errorHandler(err, res);
  }
};

module.exports = updateTask;
