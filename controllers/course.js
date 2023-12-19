const Course = require("../models/course");

const addCourse = async (req, res) => {
  try {
    const existing = await Course.findOne({ code: req.body.code });
    if (existing) {
      res.status(409).send("course  already exists");
      return;
    }
    const course = new Course(req.body);
    await course.save();
    res.status(201).send(course);
  } catch (error) {
    console.warn(error);
  }
};

const getStudents = async (req, res) => {
  try {
    const course = await Course.findOne({ code: req.params.code }).populate(
      "students"
    );
    if (course) {
      const students = course.students;
      console.log(students);
      res.status(200).send(students);
      return;
    }
  } catch (error) {
    console.warn(error);
  }
};

module.exports = { addCourse, getStudents };
