const Student = require('../models/student');

const addStudent = async (req, res) => {
    try {
        const student = new Student(req.body);
        await student.save();
        res.status(201).send(student);
    } catch (error) {
        console.warn(error);
    }
};

module.exports = { addStudent }