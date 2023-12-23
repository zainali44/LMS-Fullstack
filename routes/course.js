const express = require("express");
const router = express.Router();
const courseCtrl = require("../controllers/course");

router.post("/add", courseCtrl.addCourse);
router.get("/view", courseCtrl.viewCourses);
router.get("/update/:id", courseCtrl.updateCourse);
router.get("/students/:code", courseCtrl.getStudents);
router.put("/addStudent/:cid/:sid", courseCtrl.addStudent);
router.delete("/removeStudent/:cid/:sid", courseCtrl.removeStudent);
router.delete("/deleteCourse/:id", courseCtrl.deleteCourse);

module.exports = router;
