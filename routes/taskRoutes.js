const express = require('express');
const getAllTasks = require('../controllers/tasks/getAllTasks');
const createTask = require('../controllers/tasks/createTask');
const getTaskById = require('../controllers/tasks/getTaskById');
const updateTask = require('../controllers/tasks/updateTask');
const deleteTask = require('../controllers/tasks/deleteTask');

const router = express.Router();

router.get('/', getAllTasks);
router.get('/:id', getTaskById);
router.post('/', createTask);
router.patch('/:id', updateTask);
router.delete('/:id', deleteTask);

module.exports = router;