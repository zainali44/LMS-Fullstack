const Student = require("../models/student");

const addStudent = async (req, res) => {
  try {
    const existing = await Student.findOne({ regNo: req.body.regNo });
    console.log(existing);
    if (existing) {
      res.status(400).send("Student already exists");
      return;
    }
    const student = new Student(req.body);
    await student.save();
    res.status(201).send(student);
  } catch (error) {
    console.warn(error);
  }
};

const viewStudents = async (req, res, next) => {
  try {
    const students = await Student.find();
    res.status(200).json(students);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};

module.exports = { addStudent, viewStudents };
