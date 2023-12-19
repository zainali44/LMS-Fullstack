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

module.exports = { addStudent };
