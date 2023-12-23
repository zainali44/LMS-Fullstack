const express = require("express");
const router = express.Router();
const studentCtrl = require("../controllers/student");

router.post("/add", studentCtrl.addStudent);
router.get("/view", studentCtrl.viewStudents);
router.get("/view/:regNo", studentCtrl.viewStudentsbyRegNo);

module.exports = router;
