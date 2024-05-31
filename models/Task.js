const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    description: {
        type: String,
        required: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    reward: {
        type: Number,
        required: true
    },
    completionDate: {
        type: Date,
        required: true
    }
});

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;