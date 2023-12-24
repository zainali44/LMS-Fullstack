const Teacher = require('../models/teacher');

const getAllTeachers = async (req, res) => {
  try {
    const teachers = await Teacher.find();
    res.status(200).json(teachers);
  } catch (error) {
    console.warn(error);
    res.status(500).send("Internal Server Error");
  }
};

const getTeacherById = async (req, res) => {
  try {
    const teacherId = req.params.id;
    const teacher = await Teacher.findById(teacherId);
    
    if (!teacher) {
      res.status(404).send("Teacher not found");
      return;
    }

    res.status(200).json(teacher);
  } catch (error) {
    console.warn(error);
    res.status(500).send("Internal Server Error");
  }
};

module.exports = {
  getAllTeachers,
  getTeacherById,
};
