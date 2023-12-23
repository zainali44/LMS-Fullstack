const express = require('express');
const router = express.Router();
const courseCtrl = require( '../controllers/course' );


router.get("/getAllCourses", courseCtrl.getAllCourses );
router.put("/addMarks/:cid/:sid", courseCtrl.addMarks);
router.post("/add", courseCtrl.addCourse);
router.get("/students/:code", courseCtrl.getStudents);
router.put("/addStudent/:cid/:sid", courseCtrl.addStudent);
router.delete("/removeStudent/:cid/:sid", courseCtrl.removeStudent);
router.delete("/deleteCourse/:id", courseCtrl.deleteCourse);

module.exports = router;
