const mongoose = require("mongoose");

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
    type: [
      {
        type: mongoose.Types.ObjectId,
        ref: "Student",
      },
    ],
    required: false,
  },
  teachers: {
    type: [
      {
        type: mongoose.Types.ObjectId,
        ref: "Teacher",
      },
    ],
    required: false,
  },
});

const Course = mongoose.model("Course", courseSchema);
module.exports = Course;
