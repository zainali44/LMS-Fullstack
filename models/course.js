const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
    name: {
        type: String, 
        required: true,
    },
    code: {
        type: String, 
        required: true,
    },
    dept: {
        type: String, 
        required: true,
    },
    students: {
        type: [String],
        required: false,
    },
    teachers: {
        type: [String],
        required: false,
    }
});

const Course = mongoose.model('Course', courseSchema);
module.exports = Course;