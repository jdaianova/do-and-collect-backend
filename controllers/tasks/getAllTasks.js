const Task = require("../../models/Task");
const errorHandler = require("../../utils/errorHandler");

const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find();
    res.status(200).json(tasks);
  } catch (err) {
    errorHandler(err, res);
  }
};

module.exports = getAllTasks;
