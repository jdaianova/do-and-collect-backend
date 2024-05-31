const Task = require("../../models/Task");
const errorHandler = require("../../utils/errorHandler");

const createTask = async (req, res) => {
  const { description, reward, completionDate } = req.body;

  const task = new Task({
    description,
    completed: false,
    reward,
    completionDate: new Date(completionDate),
  });

  try {
    const newTask = await task.save();
    res.status(201).json(newTask);
  } catch (err) {
    errorHandler(err, res);
  }
};

module.exports = createTask;
