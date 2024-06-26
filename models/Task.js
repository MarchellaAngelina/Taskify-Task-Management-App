const mongoose = require('mongoose');

// Definisikan schema untuk tugas
const taskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    tag: {
        type: String,
        default: 'General'
    },
    date: {
        type: Date,
    },
    collaborators: {
        type: String,
        default: ''
    },
    owner: {
        type: String,
        required: true
    }
});

// Buat model 'Task' dari schema
const Task = mongoose.model('Task', taskSchema);

module.exports = Task;
