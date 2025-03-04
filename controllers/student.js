const Student = require("../models/student");
const Course = require("../models/course");
const { default: mongoose } = require("mongoose");
const { ObjectId } = require("mongodb");

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

const viewStudentsbyRegNo = async (req, res, next) => {
  try {
    const student = await Student.findOne({ regNo: req.params.regNo });
    res.status(200).json(student);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};

const updateStudent = async (req, res) => {
  try {
    const updatedStudent = await Student.findOneAndUpdate(
      { regNo: req.params.regNo },
      req.body,
      { new: true }
    );

    if (!updatedStudent) {
      return res.status(404).send("Student not found");
    }

    res.send(updatedStudent);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const getAllCoursesOfAStudent = async (req, res) => {
  const sid = req.params.id;
  try {
    const courses = await Course.find({
      "students": {$elemMatch:{ "id" :  sid }}
    });
    res.json(courses);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
  addStudent,
  viewStudents,
  viewStudentsbyRegNo,
  updateStudent,
  getAllCoursesOfAStudent,
};
